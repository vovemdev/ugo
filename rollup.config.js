import pkg from './package.json';

// Pulls details from the package.json file
let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.author} | ${pkg.license} license */`;

// The formats to output
let formats = ['cjs'];

// The files to compile with rollup.js
export default formats.map(function (format) {
	return {
		input: 'index.js',
		output: {
			file: `index.${format}.js`,
			format: format,
			name: 'Ugo',
			banner: banner,
			exports: 'auto'

		}
	};
});