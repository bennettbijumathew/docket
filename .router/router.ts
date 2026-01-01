import { createRouter } from 'sv-router';
import AboutIndex from '../src/routes/about/index.svelte';
import Index from '../src/routes/index.svelte';

export const routes = {
  '/about': {
    '/': AboutIndex
  },
  '/': Index
};
export type Routes = typeof routes;
export const { p, navigate, isActive, preload, route } = createRouter(routes);
