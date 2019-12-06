---
title: Swift Scripting… things to know.
---

Over the last few days I’ve worked on using Swift as a scripting language for my workflows. Fortunately for me, my system is on OSX because I am somewhat disgruntled with the Linux support.

I try to keep these post sharp and on point, so I’m going to let you in on a secret. My endeavor to understand the Swift language is ultimately to replace all my custom Ruby scripts that automate things for me on my system with Swift powered apps. But not only that, I am attempting to turn these bundles of automation power into cross-platform scripts. So here is what I’ve learned about **scripting with Swift on OSX and on Linux**… so far.

On unix type systems, OSX and Linux, we can use the *shebang* syntax to turn our Swift files into executable scripts. Here is a really quick demonstration of what I mean:

```swift
#!/usr/local/bin/swift

print("I am a command line script.");
```

That first line is called the shebang and is telling our shell where to find the interpreter of our script. In this case where the Swift REPL is installed on your system.  This is important, because it may be in a different location and you’ll need to adjust accordingly.

**Tip:** If you’re running on OSX, you can change the shebang to: `#!/usr/bin/env` swift. This will make sure you always use your environment’s version of Swift (you can always change it if your experimenting with other versions).

If you’re running on Linux, unless you know which file you want to use, you can get your environment’s location by running `which swift` on the command line and copy that path to the shebang.

To run your script you need to change it’s permission, a quick `chmod +x myscript.swift` will do the trick. Now you can run your script by typing `./myscript.swift`. To take it even one step further, you can drop the .swift extension, perform a `sudo cp ./myscript /usr/local/bin` and run your script from anywhere on your system.

Ok, so that part is easy, but here is where my cross platform woes enter. The Swift core standard library gives you plenty of functionality to write some awesome scripts already, **but**, for me to replace my scripts I need the power of the **Foundation Framework** and a few **C libraries**. Here’s the good news, Foundation is included in Swift on both OSX and Linux. Here’s the **bad news**, half of the things I want to use in Foundation is **not yet implemented**.  To see the status of what you can and can’t use, here is the current status: [Implementation Status](https://github.com/apple/swift-corelibs-foundation/blob/master/Docs/Status.md).

All’s not lost, I can create much of what I want to use using some C standard libraries. However, implementation on OSX is different than implementation on Linux, so I need to be able to conditionally check which platform I am running on and import **Darwin** for OSX or **Glibc** for Linux. Fortunately I can do that with the following bit of code (I’m also going to define a couple of constants to make checking easier later in my scripts).

```swift
// Get Foundation (for what its worth)
import Foundation

let isLinux: Bool
let isOSX: Bool

#if os(Linux)
  // Get Glibc 
  import Glibc
  isLinux = true
  isOSX = false
#elseif os(OSX)
  // Get Darwin
  import Darwin
  isLinux = false
  isOSX = true
#else
  isLinux = false
  isOSX = false
#endif
```

Now I can make sure I target the right platform with the right code to make sure that my scripts work. And yes, there are many differences. As an example, using `addrinfo` on Darwin is different from doing so using Glibc. Silly things, like the order of parameters in initializers, or even type differences in some constants.

Its quite the learning experience targeting both platforms, but I am sure that as Swift continues to grow as a language these things will come more into alignment. For example, the Foundation Framework as it is is not recommended for production environments, and is expected to only be fully implemented in Swift 3.0. In the meantime, this gives a great opportunity to learn the ins and outs (Swift humor) of the language without the help of some libraries.

Hope you’re enjoying the ups and downs of this journey as much as I am.