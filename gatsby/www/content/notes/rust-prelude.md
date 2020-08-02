---
title: Rust Prelude.
seoDescription: Ever wondered why you need to use a library for Rust to `read_line` but not `println!`?
---

When learning Rust it can be confusing why you can do some basic things, like printing output or cloning references, but some other basic things seem to require libraries; like `read_line`.

Turns out that Rust tries its best to identify things that EVERY program is likely to need vs what we would consider basic functionality. Its pretty deterministic, but for good reason. This is called the "Rust Prelude". Find out more here: [Rust Doc's - Prelude](https://doc.rust-lang.org/std/prelude/index.html).

**Example:**

```rust
use std::io;

fn main() {
    println!("Please input something:");

    let mut something = String::new();

    io::stdin()
        .read_line(&mut something)
        .expect("Failed to read line");

    println!("You typed: {}", something);
}
```

* `println!` is available because of the prelude.
* `read_line` needs to be `use`d from a library.
