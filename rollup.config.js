import resolve from "@rollup/plugin-node-resolve";
import { terser, timestamp } from "rollup-plugin-bundleutils";

const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/index.ts",
    preserveEntrySignatures: "allow-extension",
    output: {
        dir: "dist",
        entryFileNames: "atlr.js",
        chunkFileNames: ({ name }) => `${name.toLowerCase()}.js`,
        format: "es",
        minifyInternalExports: false,
    },
    plugins: [
        resolve({
            browser: true,
        }),
        production &&
        terser({
            output: {
                preamble: `// ${timestamp()}`,
            },
        }),
    ],
};