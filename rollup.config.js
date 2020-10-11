import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

const production = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    name: 'KVEditor',
    sourcemap: production ? 'none' : 'inline',
    format: 'es',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript(),
    postcss({
      extract: false,
      use: ['sass']
    }),
    production ? terser() : null
  ]
};
