---
title: Overcoming the Complexity
date: 2020-08-04T15:04:33.966Z
---

**TL;DR; of this whole rant is that I am now using Foam and 11ty for my digital garden. It is keeping my content as primary concern and publishing as a secondary.**

WordPress, Drupal, Gatsby, etc. There are so many ways to get your content out on the web that it should be a no-brainer. Though, for some reason I simply could not get the words out.

For WordPress there is logging in and having to stare at the block editor (or classic editor) and hoping words would just start appearing. For GatsbyJS there was the dance around having to source files and using MDX so I can write in Markdown, theme composition to get the features I thought I wanted. For Hugo there was... ok, I chose not to swallow that pill. I love Golang, its one of my favorite languages, but not when all I want is a simple site. The list could go on... and there is no way I am using any of those online services, you know, Wix or Squarespace.

I spend most my day inside my code editor. So why couldn't I just use that? I mean, that would remove the friction down to zero and the only battle I'd have to fight is my own desire to punch the keys. I could have all my shortcuts, extensions I feel comfortable with; git flows that is second nature.

But how could I do that? How could I make writing as productive as coding and not have it feel like coding? I don't even want to see HTML when I write. I want the ability to make linking to other notes as seamless as possible without even having to think about typing out URLs.

As I was scrolling back through the #productivity channel in a workplace Slack, I saw people raving about Notion, about Roam Research, about Obsidian, about Foam. Their use cases were simple. A place to take notes and have it interconnected. I do paper journaling, so I dismissed all these tools. But then someone mentioned Foam again. Zettlekasten inside VSCode? This was intriguing. What if I could create a network of notes in a completely flat structure and just publish it?

I had to try Foam! When I started looking into Foam I saw a template that builds your Foam workspace with 11ty. What was 11ty?! Oh, just another static site generator (SSG). Wait, a static site generator! I can just point it at my flat structure and a site comes out on the other side. No custom node creation with APIs! No complex plugins! Not even a `package.json` file unless I want to publish of course.

I had zero love for the Foam + 11ty template I found. But 11ty was curious. It was remarkably simple. So I did stare down that rabbit hole. I built a simple 11ty folder structure that I could keep away from my content. My content is at the root level. The site concerns are not. This was the gamechanger for me. When the content is more prominent than the tools for publishing it, I am on the right track!

Now it's just up to me and I can no longer blame my tools.
