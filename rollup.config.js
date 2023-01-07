import { readFileSync } from 'node:fs'

import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const packageJson = JSON.parse(readFileSync(new URL('./package.json',
    import.meta.url)))

export default [{
    input: ['./src/index.ts'],
    external: [
        'react',
        'react-dom',
        '@stitches/react',
        'react/jsx-runtime',
        '@radix-ui/react-navigation-menu',
    ],
    output: {
        file: packageJson.exports,
        format: 'esm',
    },
    plugins: [
        peerDepsExternal(),
        typescript({
            useTsconfigDeclarationDir: true,
            exclude: ['node_modules/**', '**/*.stories.tsx', '**/*.stories.ts', '**/*.test.tsx'],
        }),
        terser(),
    ],
}, ]