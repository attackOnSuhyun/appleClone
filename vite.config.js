import { sync } from "glob";
import { build } from "vite";
import { resolve } from "path";

export default {
    resolve: {
        alias: {
            "@js": resolve(__dirname, "src/aeests/js"),
        },
    },
    root: "./src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: sync("./src/**/*.html").map((file) => file.replace(/\\/g, "/")),
        },
    },
};