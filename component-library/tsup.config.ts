import { defineConfig } from 'tsup'

const isProd = process.env['NODE_ENV'] === 'production'

export default defineConfig({
  entry: ['src/index.ts'],
  inject: ['src/react-shim.js'],
  splitting: isProd,
  sourcemap: !isProd,
  treeshake: isProd,
  clean: true,
  dts: true,
  minify: isProd,
  format: ['esm', isProd && 'cjs'].filter((o) => o) as any,
})
