/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import {CacheFirst} from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

precacheAndRoute([
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/07.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/14.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/50.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/53.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/54.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/55.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/57.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/58.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/59.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/60.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/61.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/62.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/63.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/64.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/65.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/66.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/67.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/68.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/Slide1-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/Slide2-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/cockles2.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/一品海蛎煎.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/上汤苋菜.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/九转小肠.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/佛跳墙.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/兴化炒米粉-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/农家擦粉-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/冰心榴莲.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/冰砖杨梅水.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/包菜饭.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/南日鲍.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/咸香酥脆黄花鱼.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/四小拼.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/头水紫菜.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/家常焖笋干.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/扁肉汤.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/枇杷冻-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/桂花陈皮炖雪梨.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/水晶猪蹄冻.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/猪手.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/百秒黄花鱼.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/皇白菜炖软豆腐.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/砂锅黄花鱼汤.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/红菇卤面.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/胎菊茶-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/芋芯.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/芋香鸭-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/芥兰豆皮-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/荔枝肉.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/莲子雪耳汤-1.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/蒜蓉蒸虾.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/蒜香鸡.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/辣汁啦啦.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/酒香药膳虾.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/铁板滑豆腐.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/风味焖苦瓜.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/马鲛鱼.jpeg?alt=media"},
  {url: "https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/黄金荷叶包-1.jpeg?alt=media"},
])

registerRoute(
  new RegExp('https://firebasestorage\\.googleapis\\.com/v0/b/kg-food\\.appspot\\.com/o/.*\\.jpeg\\?alt=media'),
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 1000 * 24 * 60 * 60,
      }),
    ]
  })
);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }: { request: Request; url: URL }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    }

    // If this is a URL that starts with /_, skip.
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    // If this looks like a URL for a resource, because it contains
    // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
