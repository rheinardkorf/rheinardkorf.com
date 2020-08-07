---
title: Building Tide for WordPress
date: 2020-08-04T16:19:53.274Z
---

This is the untold story of the birth of [Tide](http://wptide.org/).

Mid 2017, one of my colleagues approached me with a simple request. He had a bash script that would run some linting and lines of code checks on a WordPress plugin, then give it a star rating out of five. He asked me to turn it into a Slack command that we could use as an internal audit tool.

I liked the idea, but I did not like the idea of restricting it to a single-use implementation. Also, I really wanted to build some microservices at the time. I answered with, 

> *"What if I can give you an API that would do an audit on **every single** plugin in the WordPress.org plugin repository? We can use it to build the Slack bot, but also so much more."*

The seed thoughts for what would become Tide was planted.

Elsewhere in the company, several initiatives started to build on our internal expertise. A few of our teams came up with the same concept. In fact, it was so identical that it was hard to determine where the original idea started. The only reason our team got to pursue it was because I already had a working prototype.

September 2017, I present a talk at WordCamp Brisbane titled: [Finding REST: When Machines Talk to Each Other](https://wordpress.tv/2018/08/08/rheinard-korf-finding-rest-when-machines-talk-to-each-other/). I was not being very overt about what we were busy building, but I left a lot of breadcrumbs that eventually got someone to ask, "What are you building?!". I put my colleague on the spot to give me permission to share. When I got the "okay" the talk and the rest of the conversations after the talk became a lot more interesting. We got early validation that Tide was a good thing.

Enter our new Marketing maestro. "How about we call it Tide. 'A rising tide lifts all boats', Tide could potentially improve the code quality of the entire ecosystem." 😳 

Now that we had validation, we needed to move beyond a concept. We needed something that we could launch at WordCamp US. My sync server was built with Golang; our work horse was built with Symphony; the original API was build with the WordPress REST API; our job queue sat in SQS. We did not plan for scale, but in a few months we were going to unleash the WordPress world at our service. 

We were so blessed to receive a benefactor that allowed us to continue our work and get us to launch. With a small proviso -- After launch, we need to move our services from AWS to GCP. 

By this time I knew we were in trouble. To finish this on AWS and then port it for GCP after launch was not going to be pretty. So while the team was continuing down our current trajectory; I started rebuilding. The WordPress REST API was simply not going to cut it for the volume we were going to have to deal with. I used some of the early work on my syncing server to create a suite of Golang packages (<https://github.com/wptide/pkg>) that I can later reuse to spin up the other services.

While I was at it, I did not want to let go of AWS completely, so I built abstract connectors for everything! The DB was abstracted so that it would run on S3; GCS and Mongo DB (for easy local development). The job queue was abstracted to run on SQS, Firestore and Mongo. I honestly have never had so much fun abstracting things.

WordCamp US 2017, Tide was launched. At least some incarnation of it. It had a massive, but a mixed response. Some toes were stepped on and we had to recognize that our tool did not just attempt to grade something, we exposed potentially risky information. So that same day, Tide also had to go into hiatus. Later that weekend at his "State of the Word", Matt Mullenweg introduced Tide to our community. We donated Tide to the community and invited contributions (we still do, please help!).

After WordCamp US the time I had left on Tide was beginning to come to an end. There were many things still left to do. I worked tirelessly to get us to a place where I could let go. What felt like my baby with all the ups; the downs; the joys; the frustrations; it was all coming to an end. I had other projects that needed my attention and Tide now belonged to everyone. 

I am super proud of this journey we took as an organization. I am super proud of the opportunities and partnerships that resulted as we shared our learning. I am super proud of our collaboration with the WordPress.org team. I am super proud of every single contributor that have their names listed in the project readme files. I am super thankful to the leadership team that allowed us to pursue this. I am super thankful for our benefactors. Dang, I am just super proud of Tide. I do hope, that it would make the kind of impact that we set out to accomplish.

The learning from this journey will forever be with me.  

**My biggest regret?**

I built it all in Golang. Its what I like most about it, but its also the thing that is holding it back the most. Typically contributors in the WordPress space are familiar with PHP and more and more Javascript. By going for a language that I knew would keep Docker instances small; that had awesome concurrency; has the best native test tools period!; I was sacrificing contribution for performance. 

**What would I do differently?**

Easy. I'd go Serverless!

Okay, that's enough. Get ready for the link roll:

* [XWP: Tide Case Study](https://xwp.co/work/tide/)
* [State of the Word, 2017](https://ma.tt/2017/12/state-of-the-word-2017/) (12:45 - 15:20)
* [Tide Official Documentation](http://wptide.org/)
* [Tide WordPress Make Site](https://make.wordpress.org/tide/) (Please contribute if you can!)
* [Tide Common Go Packages](https://github.com/wptide/pkg)
* [Tide GitHub Organization](https://github.com/wptide) 
* [My WordCamp Talk](https://wordpress.tv/2018/08/08/rheinard-korf-finding-rest-when-machines-talk-to-each-other/)
* [Kudos! README.md](https://github.com/wptide/wptide/blob/develop/README.md#contributors)
