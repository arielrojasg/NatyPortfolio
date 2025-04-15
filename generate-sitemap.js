// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const baseUrl = 'https://itsnvillalobos.com';

const routes = [
  '/',             // home
  '/about',        // example route
  '/enquirenow',      // example route
  '/services',
  '/mywork'
];

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  routes.forEach(route => sitemap.write({ url: route }));

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ sitemap.xml generated');
})();
