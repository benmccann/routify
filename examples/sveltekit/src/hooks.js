/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, loader }) {
    const ssrNode = await loader.loadComponent({ id: 'src/routes/root.svelte' });
    const rendered = ssrNode.module.default.render();
    const externalResources = [
        ...Array.from(ssrNode.js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
        ...Array.from(ssrNode.css).map((dep) => `<link rel="stylesheet" href="${dep}">`)
    ].join('\n\t\t');
    const styles = ssrNode.styles.size ? `<style>${ssrNode.styles.join('\n')}</style>` : ''
    const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${externalResources}
        ${styles}
        ${rendered.head}
    </head>
    <body>
        <div id="svelte">${rendered.html}</div>
    </body>
</html>
`;
    return {
        status: 200,
        body: html,
        headers: {
            'content-type': 'text/html'
        }
    }
}
