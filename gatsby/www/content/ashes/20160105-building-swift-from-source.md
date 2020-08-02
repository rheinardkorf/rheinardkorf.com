---
title: Building Swift from Source
---

All my Swift learning thus far has been using the binaries provided from the [Swift.org](https://swift.org/download/#latest-development-snapshots) site.  This is good most of the time and it is what I’ve included in my Vagrant project, [Vagrant Swiftbox](https://github.com/rheinardkorf/vagrant-swiftbox).

> Ok! So when I wrote this post I clearly didn't know about Docker. Please don't use Vagrant Swiftbox. I have not looked at it for a very log time.

Yesterday I decided to update the binaries to a more recent package. That worked well mostly, but somehow I managed to break my libraries (read, copying compiled files to the wrong location).

This was enough to make me thing, there has got to be a cleaner way to upgrade the next build. But that’s not where I stopped, I was thinking in stead, what if I was to build it from source. Then I could reproduce my steps as a script and can feel free to upgrade to whatever development build is available.

Turns out that its a bit harder than I thought to build from source. You have to make sure all the dependencies are in place and when you finally build, be prepared to wait a long time (especially if it fails and you need to figure out why). Once its compiled though, upgrading is a whole lot easier and quicker.

I decided to take what I’ve learned and put it back into Vagrant Swiftbox. This way saving hours of headaches for others who want to poke around the source and compile it. If however you do want to poke around, take a look at the [provisioning script](https://github.com/rheinardkorf/vagrant-swiftbox/blob/master/provision/provision.sh) and look for the section that reads, “Building Swift from source“. This will save you a lot of searching around.

Also, take a look at the “# Req’d for building Swift from source” section. This will show you what packages you need to build Swift if you want to do it on your own.

I hope this helps someone.