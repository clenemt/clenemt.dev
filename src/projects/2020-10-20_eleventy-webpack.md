---
title: A starter template for eleventy
image: eleventy-webpack-banner.png
description: Webpack seems to be my go-to bundler, thanks to all the React I am doing. It felt natural to use it with Eleventy.
date: 2020-10-20
tags: open-source
---

Webpack and Eleventy paired nicely together in a barebone template. {.lead}

Webpack seems to be my go-to bundler, thanks to all the React I am doing these days. And since I am going to do a lot more Eleventy in the coming weeks, why not put something out there that my help others.

## Features

- 🔥 Barebone [11ty](https://www.11ty.dev/) (literally :scream:)
- ⚡ Fast build with per env configs ([babel-env](https://babeljs.io/docs/en/babel-preset-env), [postcss-preset-env](https://github.com/csstools/postcss-preset-env), [webpack](https://webpack.js.org/configuration/#use-different-configuration-file)...)
- `.js` (ES6, Babel, Polyfills)
- `.css` (Sass, PostCSS, Autoprefixer)
- ✅ Optimized for production (source maps, headers, minified code...)
- 📸 Responsive images and cached remote images ([@11ty/eleventy-img](https://github.com/11ty/eleventy-img))
- 📦 SVG icon sprite generation
- 🤖 SEO metadata and Open Graph tags
- 🔗 Safe external links (`noopener` and `noreferrer`)
- 📝 Useful shortcodes and filters (date, markdown, sprite icons, responsive images...)
- 🈵 Neat error overlay ([eleventy-plugin-error-overlay](https://github.com/stevenpetryk/eleventy-plugin-error-overlay))
- 🎨 [Prettier](https://prettier.io/) for formatting

## Bonus

It currently ranks **#8** on [Speedlify](https://www.speedlify.dev/eleventy-starters/#site-78c4c4c7).

{% image "eleventy-webpack-speedlify.png", "A website showing a score board", "Let's make it to the top shall we" %}

---

{% icon "github" %} Code available on [Github](https://github.com/clenemt/eleventy-webpack) and demo visible [here](https://eleventy-webpack.netlify.app/).
