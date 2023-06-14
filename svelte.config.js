import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import path from 'path';
import { global_scss } from './config.js';

/** @type {import('@sveltejs/kit').Config} */

export default {
    preprocess: preprocess({
        scss: {
            prependData: global_scss,
        },
    }),
    kit: {
        adapter: adapter(),
        alias: {
            $lib: path.resolve('./src/lib'),
            $component: path.resolve('./src/components'),
            $module: path.resolve('./src/lib/modules'),
            $section: path.resolve('./src/sections'),
        }
    }

};;
