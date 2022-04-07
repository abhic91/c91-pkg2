import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import external from "rollup-plugin-peer-deps-external";
import terser from "rollup-plugin-terser";

export default {
  input: "./index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ["react", "react-dom", "@emotion", "@mui/material"],
  plugins: [
    resolve(),
    external(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    // terser.terser(),
  ],
};
