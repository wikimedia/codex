import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig( {
	server: {
		/**
		 * Explicitly allow dev server to serve files from other workspaces.
		 */
		fs: { allow: [ '../..' ] },
		// Listen on all IP addresses, in case Vite is run inside a VM
		host: '0.0.0.0'
	},

	build: {
		minify: true
	},

	resolve: {
		alias: {
			// Alias @ to the docs directory, so that import statements and <<< file inclusions
			// in the Markdown files in this directory can use the same paths
			'@': path.resolve( __dirname, './../docs' ),
			// Alias @wikimedia/codex to the entry point file, so that import statements in
			// component demos look realistic, but hot reloading still works
			'@wikimedia/codex': path.resolve( __dirname, '../../codex/src/lib.ts' )
		}
	}

} );
