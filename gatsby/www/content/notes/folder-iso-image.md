---
title: Turn a folder into an ISO image on MacOS.
seoDescription: Next time you want to share some things with a VirtualBox machine and can't mount a folder give this a try.
---

```bash
hdiutil makehybrid -o ~/image.iso ~/path/to/folder -iso -joliet
```

`-iso` - creates a ISO9660 filesystem for broader compatibility.  
`-joliet` - removes some filename restrictions in ISO9660 and allows for some additional options like `-joliet-volume-name`.

Next time you want to share some things with a VirtualBox machine and can't mount a folder give this a try.
