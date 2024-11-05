import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
    integrations: [{
        name: "MyIntegration",
        hooks: {
            "astro:config:setup": (options) => {
                options.addMiddleware({
                    order: "pre",
                    entrypoint: "/src/middleware",
                });
            },
        },
    }]
});
