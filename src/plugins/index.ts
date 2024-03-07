/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import router from '../router';
import type { App } from 'vue';
import { createPinia } from 'pinia';

const vuetify = createVuetify({});
const pinia = createPinia();

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia);
};
