---
title: Creating a Responsive Moodle Theme
---

![Moodle Theme Background](moodle_theme.png)

> In 2012 I created a responsive Moodle theme. Surprisingly, there weren't any around at the time so I thought I'd give people a heads up. Of all my posts up to this point, this one got the most traction. Go figure!

> Also, this is for a now outdated Moodle version. Here is the link for posterity: https://moodle.org/plugins/view.php?plugin=theme_responsive 😅

I’ve been asked now a few times to look at Moodle implementations and offer comments and/or advice. For the most part, people are doing really good work. However, the one area where I usually pick them up on is this: People are becoming more mobile, yet your learning management system is focused on the desktop. You need to either 1) create a separate design for each of the three device types that Moodle 2.3 serves, or 2) create a responsive theme that scales gracefully.  

The first solution is easy, but has some limitations. Despite the fact that you are designing for three different types of devices, they all still use multiple different screen sizes and resolutions. Even for the desktop alone you can’t control the exact width of the browser window.  

The second solution is much more elegant – you only need to select one theme for your Moodle installation and it scales up or down according to the viewport (window/screen) size. However, responsive Moodle themes are hard to come by and learning responsive design can be tricky. So here are a few tips.  

## Start with a Framework

If you’re going to create a responsive theme for your Moodle site you are best to start with a framework. There are numerous frameworks, but the biggest hurdle I’ve come across is that Moodle decided to adopt the YUI Javascript libraries, whereas most responsive frameworks come pre-built with jQuery. Lets put that aside for now and look at the worthy contenders:  

* 320 and Up:
Even though the creator doesn’t like to think of it as a framework, he offers a really handy solution for responsive design. The premise is that you start with the small screen first and scale up, rather than the desktop and scaling down. This keeps you focused on a content first approach. Its a nice starter set that I will use for other projects, but didn’t suite for my Moodle idea.
* HTML5 Boilerplate (including mobile boilerplate):
Not for the faint of heart, but incredibly powerful for HTML5 based websites. It has all the resets, feature detections, scripts and structure that you need for creating great websites. It is a great framework, but does not have enough starter templates to cater for various layouts in Moodle. I skipped this one too.
* Twitter Bootstrap:
I love Bootstrap. I’ve used it in a few of my site designs including a Moodle theme. It allows you to create sites incredibly quick without having to think about code structure too much. The UI (user interface) elements are great and who better to design a framework than the guys at Twitter? From a previous theme I made for Moodle I had to use jQuery to support some of Bootstrap’s functions, this broke other parts of the site. So for my new theme, I am skipping this framework (with much sadness).
* ZURB’s Foundation Framework:
To be honest, I accidentally stumbled upon ZURB in my search for an ideal starting point for a responsive Moodle theme. I have never worked with it before, but I found it incredibly appealing (the best part was the customiser that allowed me to disable all scripts that are not needed). I could turn off jQuery as a requirement and thus rely on YUI inside Moodle. This is the one I picked and I have to say that it was a great experience. It was easy to learn because of previous experiences with grid frameworks.

## Start with an existing theme

To avoid reading too much of Moodle’s theming documentation, I decided to copy the ‘**base**’ theme. The documentation states not to copy base, but I was building a new base – a responsive base. Integrating the ZURB Foundation Framework into the base theme was a breeze and a delight, all I had to do was make sure that I include the important DIV’s that Moodle requires for its ‘drag-n-drop’ features to work and the rest was easy.  

I went through each of the stylesheets that come with ‘base’ to make sure I stick to spec as closely as possible. That said, the ‘pagelayout.css’ file was the one I modified more than anything else – in that I removed EVERYTHING from it and simply created it to be overridden in other themes. It is now completely empty except for a few media queries that I added to it to customise the theme for various screen sizes.  

## Break some conventions

If I’m going to create responsive themes, I wan’t themes that follow current responsive design practices. This means that I am not going to try and cater for an XHTML Strict landscape. My themes will be HTML5 themes, but to do this required a bit of Moodle hacking (not core, don’t ever do that).  

I created an output renderer in my theme to override some of Moodle’s basic outputs. For one, the DOCTYPE declaration that forces your site to use XHTML Strict, even if you specify a different doctype in your theme (I also found a workaround I didn’t like). My theme now simply outputs `<!DOCTYPE html>` like other HTML5 sites. I also stripped out the XML guff at the start of the file (this does mean that now my site wont be indexable and support some semantic markup for big libraries, etc. etc., but I am not designing sites for large repositories, so it doesn’t phase me too much – progress is what I am after.  

I considered breaking the 3 column layout that Moodle docs states which should loosely stick to, but decided against it. However, my theme is designed in such a way that any other themes I create based on it can have other types of layouts (I like 2 column layouts with content leading).  

## Other interesting things

I never thought about how cleverly Moodle was designed (despite my issue with YUI). It was really interesting to create some other overrides that differs to the way Moodle does things. There are so many things to do and try!  

One thing I needed to do was change the login information. It just wasn’t lending itself to a mobile design. So I decided to override the normal login info that typically gets displayed in the top right corner. Rather than just a string of text with links in it, I’ve turned it into a list (that with clever styling and a bit of scripting can be turned into a drop-down menu).  

I also added the current user’s profile picture to the login information. My thinking here was that the more people see that there photo is a boring looking icon, the more they will be motivated to put something a little bit more personal on their profile – even if it is their breakfast, car or cat.  

## Next Steps

The next step is to now use this new responsive base theme for any of my future projects. After I’ve done a bit of a cleanup of the code and added some dates and versioning to it, I will upload it to the Moodle theme database.  

This little project excited me and I am looking forward to seeing more responsive Moodle sites out there (soon!).  

Note: I am more than happy to share the theme with others, but it is important to clarify that this theme is not to be used on its own. It is a base theme that other themes are built on top of. If you use it as is you will get a pretty ugly and boring site (as per the image in this post).  

If anyone would like a copy, want to provide feedback or even propose a collaboration on getting this theme out into the wild, please let me know. 