# clenemt.com

This is the source code for [clenemt.com](http://clenemt.com). Scaffolded from [eleventy-webpack](https://github.com/clenemt/eleventy-webpack).

[![Netlify Status](https://api.netlify.com/api/v1/badges/c952af3b-547a-40a6-a999-a7966a846b2c/deploy-status)](https://app.netlify.com/sites/eleventy-webpack/deploys)

## Features

- :fire: Barebone [11ty](https://www.11ty.dev/) (literally :scream:)
- :zap: Fast build with per env configs ([babel-env](https://babeljs.io/docs/en/babel-preset-env), [postcss-preset-env](https://github.com/csstools/postcss-preset-env), [webpack](https://webpack.js.org/configuration/#use-different-configuration-file)...)
- `.js` (ES6, Babel, Polyfills)
- `.css` (Sass, PostCSS, Autoprefixer)
- :white_check_mark: Optimized for production (source maps, headers, minified code...)
- :camera_flash: Responsive images and cached remote images ([@11ty/eleventy-img](https://github.com/11ty/eleventy-img))
- :package: SVG icon sprite generation
- :robot: SEO metadata and Open Graph tags
- :memo: Useful shortcodes and filters (date, markdown, sprite icons, responsive images...)
- :shipit: Neat error overlay ([eleventy-plugin-error-overlay](https://github.com/stevenpetryk/eleventy-plugin-error-overlay))
- :art: [Prettier](https://prettier.io/) for formatting

## Usage

First install the dependencies:

```sh
npm install
```

Then you can:

| Command               | Description                                   |
| --------------------- | --------------------------------------------- |
| **`npm run start`**   | Run your website on http://localhost:8080     |
| **`npm run build`**   | Build your production website inside `/_site` |
| **`npm run format`**  | Run prettier on all filles except `/_site`    |
| **`npm run analyze`** | Output info on your bundle size               |
