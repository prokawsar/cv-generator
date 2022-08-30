import { svelte } from "@sveltejs/vite-plugin-svelte";
import routify from "@roxi/routify/vite-plugin";
import { defineConfig } from "vite";
import { mdsvex } from "mdsvex";
import copy from "rollup-plugin-copy";

const production = process.env.NODE_ENV === "production";

export default defineConfig({
    clearScreen: false,

    plugins: [
        routify({
            devHelper: !production,
        }),
        svelte({
            emitCss: false,
            compilerOptions: {
                dev: !production,
            },
            extensions: [".md", ".svelte"],
            preprocess: [mdsvex({ extension: "md" })],
        }),
        copy({
            targets: [
                {
                    src: "node_modules/bootstrap/dist/css/bootstrap.min.css",
                    dest: "public/assets/bootstrap/css",
                },
                {
                    src: "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
                    dest: "public/assets/bootstrap/js",
                },
            ],
            hook: "writeBundle",
        }),
    ],
    server: { port: 1337 },
});
