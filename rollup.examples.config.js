import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import ts from "@wessberg/rollup-plugin-ts";

const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="color-scheme" content="dark light">
    <title>ImageMarker React Components Test</title>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="example.js"></script>
  </body>
</html>
`;

export default {
  input: './src/example.tsx',
  output: {
    dir: 'dist',
    name: 'KVEditor',
    sourcemap: true,
    format: 'umd',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE)
    }),
    postcss({
      extract: false,
      use: ['sass']
    }),
    ts(),
    commonjs(),
    resolve({
      browser: true
    }),
    html({
      template: () => template
    }),
    copy({
      targets: [
        { src: 'icons/*', dest: 'dist/icons' }
      ]
    })
  ]
};
