import resolve from "@rollup/plugin-node-resolve"; //Uses the node resolution algorithm for modules
import commonjs from "@rollup/plugin-commonjs"; //Converts commonjs modules to ES6 modules
import typescript from "@rollup/plugin-typescript"; //Teaches rollup how to process Typescript files
import dts from "rollup-plugin-dts"; //rollup your .d.ts files
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [ peerDepsExternal(),dts()],
    external: [/\.(css|less|scss)$/],
  },
];