import routify from '@roxi/routify/vite-plugin'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            build: {
                minify: false
            },
            plugins: [routify()],
            resolve: {
                dedupe: ['svelte'],
            },
            server: {
                fs: {
                    strict: false
                }
            }
        },

        router: false
    }
};

export default config
