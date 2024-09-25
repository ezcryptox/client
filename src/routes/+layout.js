import { appScript } from '$lib/app.confiq.js';
import { app } from '$lib/store/config.store.js';

import {browser} from '$app/environment'
/** @type {import('./$types').PageLoad} */
export function load({url}) {
    const _app = new appScript
    if(browser){
        const theme = localStorage.getItem("theme") || ""
        _app.themeConfig(theme)
    }
    app.set(_app)
}