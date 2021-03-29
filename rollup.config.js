import typescript from 'rollup-plugin-typescript';

export default [
    {        
        input: 'example/index.ts',
        output: { 
            file: 'public/main.js',
            format: 'iife',
            sourcemap: true,
            name: 'Example'
        },
        plugins: [
            typescript(),
        ],
    },
];