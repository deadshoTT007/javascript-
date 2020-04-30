> **Navigation**

*Navbar is a responsive meta components that serve as a navigation headers for your application or site.They begin collapsed in mobile views and become horizontal as the available viewport width decreases*

> Initializing Navbar
```bootstrap
<nav class="navbar navbar-default">
```
> To add Header

```
<nav class="navbar navbar-default>
<div class="navbar-header">
<a href="#" class="navbar-brand">Home</a>
</div>
</nav>
```
> To add content(from left)
```
<ul class="nav navbar-nav">
<li><a href="#">About</a></li>
</ul>
```
> To add content(From right)

```
<ui class=nav navbar-nav navbar-right>
<li><a href="#">Sign up</a></li>
</ul>
```
> For collapse

```
<div class="collapse navbar-collapse" id="something">
<a href="">Sign up</a>
//This will hide when we hit mobile size//
