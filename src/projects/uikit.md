---
title: UIKit
image: swym-post.jpg
subtitle: How a living style guide for Dassault Systèmes came to be.
description: How a living style guide for Dassault Systèmes came to be.
tags: [work, open-source]
---

Living style guides are to front-end what well thought APIs are to backend. Essentials.

They are designed to aid in building **well-organized** documentation of front-end codebases. They details all the various elements and coded modules of a site or application.

Dassault Systèmes needed to **unify its UI/UX patterns** and consolidate its front-end code. Furthermore they needed to document the _visual language_, such as header styles and color palettes, used to create their applications. It was a **one-stop place** for the entire team from product owners and producers to designers and developers to reference when discussing site changes and iterations.

## Iterations

The term _"living"_ means its an **ever-going process**.

In the course of **3+** years I iterated over this style guide and delivered not less then three versions.

### Version 1.0 (2014){.small}

{% image "uikit-v1.jpg", "Two column website showing the overview section", "The copycat intro" %}

{% image "uikit-v1-js.jpg", "Two column website showing the inputs section", "The Ext JS approach to components" %}

### Version 2.0 (2015){.small}

{% image "uikit-v2.jpg", "Full screen website with sidebar showing colors section", "Splitting the library between `css` and `javascript`" %}

{% image "uikit-v2-js.jpg", "Full screen website with sidebar showing buttons section" , "A single unified page per component" %}

### Version 3.0 (2016){.small}

{% image "uikit-v3-home.jpg", "Full screen website with sidebar showing home section" ,"The redesigned homepage for version 3" %}

{% image "uikit-v3.jpg", "Full screen website with sidebar showing colors section", "Improved design tokens documentation" %}

{% image "uikit-v3-js.jpg", "Full screen website with sidebar showing loaders section", "A more bootstrapy way to approach components" %}

## Final thoughts

This work helped me grasp some of the issues inherent to style guides:

- releasing to early
- not involving all parties
- handling breaking changes

Some of them are described in this [Smashing article](https://www.smashingmagazine.com/2016/05/creating-a-living-style-guide-case-study/).
