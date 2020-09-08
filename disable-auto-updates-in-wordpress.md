---
title: Disable Updates in WordPress
date: 2020-09-08T15:21:49.613Z
---

Add the following to `wp-config.php`:

```php
// Disable core updates.
define( 'WP_AUTO_UPDATE_CORE', false );
```

Add the following to the theme's `functions.php` or a custom plugin:

```php 
// Disable plugin updates.
add_filter( 'auto_update_plugin', '__return_false' );
// Disable theme updates.
add_filter( 'auto_update_theme', '__return_false' );
```

There are many more things you can do to really hinder those pesky updates. Check out the source code for "Disable Updates" plugin: <https://plugins.trac.wordpress.org/browser/disable-wordpress-updates/trunk/disable-updates.php>.
