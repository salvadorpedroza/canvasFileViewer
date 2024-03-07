/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FileViewer from '@/pages/FileViewer.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: FileViewer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
