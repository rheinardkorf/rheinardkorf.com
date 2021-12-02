---
title: Setting up Mermaid for quick diagrams
date: 2021-10-25T09:14:04+1100
hidden: true
---

```bash 
yarn init -y
yarn add -D @mermaid-js/mermaid-cli markserv remark-cli remark-mermaid
```

```bash
mkdir src 
touch src/README.md src/remark-mermaid-alt.js 
touch .remarkrc
``` 

`.remarkrc`
```json 
{
    "plugins": {
        "./src/remark-mermaid-alt.js": {
            "destination": "./images/mermaid",
            "linkRoot": "./images/mermaid/"
        }
    }
}
``` 

`src/remark-mermaid-alt.js`
```javascript
const crypto = require( 'crypto' );
const fs = require( 'fs-extra' );
const path = require( 'path' );

const visit = require( 'unist-util-visit' );
const { execSync } = require( 'child_process' );
const mmdc = require.resolve( '@mermaid-js/mermaid-cli/index.bundle.js' );

const PLUGIN_NAME = 'remark-mermaid-alt';

async function generateSVG( value, file, options ) {
	const { destination = './images', mermaidArgs = {} } = options;

	// Unique paths.
	const unique = crypto
		.createHmac( 'sha1', PLUGIN_NAME )
		.update( value )
		.digest( 'hex' );
	const inputFile = `${ unique }.mmd`;
	const mmdPath = path.join( destination, inputFile );
	const outputFile = `${ unique }.svg`;
	const svgPath = path.join( destination, outputFile );

	// Args for CLI.
	mermaidArgs.input = mmdPath;
	mermaidArgs.output = svgPath;
	const args = []
		.concat(
			...Object.keys( mermaidArgs ).map( ( k ) => [
				`--${ k }`,
				mermaidArgs[ k ],
			] )
		)
		.join( ' ' );

	// Write temp file.
	fs.outputFileSync( mmdPath, value, { encoding: 'utf8' } );

	// Execute mermaid.
	execSync( `${ mmdc } ${ args }` );

	// Clean up.
	fs.removeSync( mmdPath );

	return `${ outputFile }`;
}

async function transformMermaidNode( node, file, index, parent, options ) {
	const { lang, value, position } = node;

	try {
		const { linkRoot = './' } = options;
		const svgFile = await generateSVG( value, file, options );
		const message = `${ lang } code block replaced with rendered mermaid SVG`;
		file.info( message, position, PLUGIN_NAME );

		const newNode = {
			type: 'image',
			title: '`mermaid` image',
			url: `${ linkRoot }${ svgFile }`,
		};
		parent.children.splice( index, 1, newNode );
	} catch ( error ) {
		file.fail( error, position, PLUGIN_NAME );
	}

	return node;
}

/**
 * Remark plugin that converts mermaid codeblocks into SVG files.
 *
 * @param {Object} options
 */
function mermaid( options = {} ) {
	/**
	 * Look for all code nodes that have the language mermaid,
	 * generate SVGs and update the url.
	 *
	 * @param {Node} ast The Markdown Tree
	 * @param {Object} file The virtual file.
	 * @return {Promise<void>} The altered tree.
	 */
	return async function ( ast, file ) {
		const promises = []; // keep track of promises since visit isn't async
		visit( ast, 'code', ( node, index, parent ) => {
			// If this codeblock is not mermaid, bail.
			if ( node.lang !== 'mermaid' ) {
				return node;
			}
			promises.push(
				transformMermaidNode( node, file, index, parent, options )
			);
		} );
		await Promise.all( promises );
	};
}

module.exports = mermaid;
```

## Build and Serve 

`src/README.md` 
```text
# Readme for Project XYZ
```

```bash 
yarn build
yarn serve 
```


## Optional Mermaid Config:
`.remarkrc`
```json 
{
    "plugins": {
        "./src/remark-mermaid-alt.js": {
            "destination": "./images/mermaid",
            "linkRoot": "./images/mermaid/",
            "mermaidArgs": {
				"configFile": ".mermaidrc"
			}
        }
    }
}
``` 

```bash 
touch .mermaidrc
```

`.mermaidrc` (example)
```json
{
	"sequence":{
		"diagramMarginY" :10,
		"diagramMarginX" :50,
		"actorMargin" :50,
		"width" :150,
		"height" :65,
		"boxMargin" :10,
		"boxTextMargin" :5,
		"noteMargin" :10,
		"messageMargin" :35,
		"messageAlign" :"center",
		"mirrorActors" :false,
		"bottomMarginAdj" :1,
		"useMaxWidth" :true,
		"rightAngles" :false,
		"showSequenceNumbers" :false
	}
}
```

