const minify = require('rollup-plugin-babel-minify');

/*
* A small life hack.
* Since enabling the code splitting makes Rollup autogenerate output filename,
* I can reuse config for different input files without shared chunks.
* */

module.exports = {
    output: {
        dir: './',
        format: 'cjs'
    },
    experimentalCodeSplitting: true,
    plugins: [
        minify({
            comments: false
        })
    ]
};
