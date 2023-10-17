import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
import {normalizePath} from "vite";

console.log(path.resolve(__dirname, './src/script-editor'))

export default {
    root: './src',
    build: {
        outDir: '../dest',
        minify: false,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                impressum: resolve(__dirname, 'src/impressum.html'),
                datenschutzerklaerung: resolve(__dirname, 'src/datenschutzerklaerung.html'),
                kontakt: resolve(__dirname, 'src/kontakt.html')
            },
        },
    },
    plugins : [
        viteStaticCopy({
            targets: [
              {
                src: normalizePath(path.resolve(__dirname, './src/script-editor') + '/[!.]*'),
                dest: './',
              },
            ],
          })
    ]
}
