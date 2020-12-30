import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';
import ts from "@wessberg/rollup-plugin-ts";
import filesize from 'rollup-plugin-filesize';

const production = process.env.NODE_ENV === 'production';

const output = {
  sourcemap: !production,
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
}

export default {
  input: './src/index.ts',
  output: [
    {
      ...output,
      file: 'dist/cjs/index.js',
      format: 'cjs'
    },
    {
      ...output,
      file: 'dist/es/index.js',
      format: 'es'
    },
    {
      ...output,
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'KVEditor'
    }
  ],
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
    copy({
      targets: [
        { src: 'icons/*', dest: 'dist/icons' }
      ]
    }),
    production ? terser() : null,
    filesize()
  ]
};
