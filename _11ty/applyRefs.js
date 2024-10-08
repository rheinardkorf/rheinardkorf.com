fs = require('fs')
process = require('process')

const file = process.argv[2]; 

if ( !file ) {
    console.log('Please give a file as first argument.')
    return;
}

const data = fs.readFileSync(file).toString();

const linkRegex = /\[\[.*\]\]/gm;
// const spacingRegex = /\n{3}\[\/\/begin]/gm;
const spacingRegex = /\n{4}/gm;
const refRegex = /\[\/\/begin\].*\[\/\/end\].*/gms;

const prefix = '[//begin]: # "Autogenerated link references for markdown compatibility"';
const suffix = '[//end]: # "Autogenerated link references"';

// Remove previous refs.
let newData = data.replace(spacingRegex,'[//begin]').replace(refRegex,'');
newData += `\n\n\n\n${prefix}\n`;

// Add new refs.
let m;
let replacements = 0;
while ((m = linkRegex.exec(data)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === linkRegex.lastIndex) {
        linkRegex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        const title = match.replace(/\[{2}|\]{2}/gm,'')
        const slug = title.toLowerCase().replace(/[\]\[\s|\.\?!:()"']/gm,'-').replace(/--*/gm,'-').replace(/-*$/,'')
        newData += `[${title}]: ${slug} "${title}"\n`;
        replacements++;
    });
}

newData += suffix;

if ( replacements > 0 ) {
    try {
        fs.writeFileSync(file,newData);
    } catch (error) {
        console.error(error)
    }
}