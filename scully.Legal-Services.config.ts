import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'Legal-Services',
  distFolder: './dist/legal-services/browser',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {},
};