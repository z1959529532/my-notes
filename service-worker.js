/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b954eaa608a8fbdeb56e0ac90afb6884"
  },
  {
    "url": "article/index.html",
    "revision": "4a9fb3beb7350522b6a345c35a018575"
  },
  {
    "url": "assets/css/0.styles.35aa761d.css",
    "revision": "8d30e60ab20bf7c2cd58c662fb1f992e"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/imgs/header-icon.png",
    "revision": "fcb891cfc4ceabcffb9f95f70f4952f4"
  },
  {
    "url": "assets/imgs/header.png",
    "revision": "d7621bfa530d0379c40cad0db5138f89"
  },
  {
    "url": "assets/imgs/hero.png",
    "revision": "022673a05c2be71e96972951a5cd9e5b"
  },
  {
    "url": "assets/js/1.e99325aa.js",
    "revision": "c7290b061798d1c185ad327217c8b1c7"
  },
  {
    "url": "assets/js/10.16149978.js",
    "revision": "fbaf6b3c35d0edfbf1bd27220a221367"
  },
  {
    "url": "assets/js/11.2307a0a2.js",
    "revision": "72546226f9308ac93e2fe3eca376eaac"
  },
  {
    "url": "assets/js/12.9f3aafbe.js",
    "revision": "fe0e1172aea86c38f6ebfe5adc6e83ef"
  },
  {
    "url": "assets/js/13.9607921d.js",
    "revision": "191c1db829e9345c89e2b13b10239a31"
  },
  {
    "url": "assets/js/14.81d417e0.js",
    "revision": "794147175f073fa772a6f75509e7ceac"
  },
  {
    "url": "assets/js/15.42324ec6.js",
    "revision": "2738fd82d376d5d1703af8deb9cd65b8"
  },
  {
    "url": "assets/js/16.7b51d7cd.js",
    "revision": "d92702f9669209ae200468f2bc519c95"
  },
  {
    "url": "assets/js/17.75c84532.js",
    "revision": "7e5377cc8c3d3f9a4ccff9c8d990a5d4"
  },
  {
    "url": "assets/js/18.12fdc582.js",
    "revision": "6783088a4da486f11769664647ab1096"
  },
  {
    "url": "assets/js/19.8c1daa26.js",
    "revision": "4cbe901633bb06bb6747fd10d1ea7997"
  },
  {
    "url": "assets/js/20.53121529.js",
    "revision": "9faa461219380eb4fa48f1f89a12d115"
  },
  {
    "url": "assets/js/21.7b28f5c0.js",
    "revision": "cea566d024a0302a862a69061849a4f8"
  },
  {
    "url": "assets/js/22.54f288be.js",
    "revision": "a7ef046eeeaf4fb66de174e90a05f982"
  },
  {
    "url": "assets/js/23.5859cf06.js",
    "revision": "0322feb858105513062db2c4552210ff"
  },
  {
    "url": "assets/js/3.e9f20c5e.js",
    "revision": "abd069015de51f12474a0b68fb0b6dfb"
  },
  {
    "url": "assets/js/4.1858097a.js",
    "revision": "87cf2cb833fc5a5584d2301f4f4dee41"
  },
  {
    "url": "assets/js/5.b77d0b8d.js",
    "revision": "927b58890cccd9a870ed2b3fb3aaa69b"
  },
  {
    "url": "assets/js/6.d91de08d.js",
    "revision": "f6cb27eb9326deb2b5d8885a9b503d16"
  },
  {
    "url": "assets/js/7.0e05eb8c.js",
    "revision": "0b03fe545ce654206d04f724bdf57adc"
  },
  {
    "url": "assets/js/8.9f82e0d8.js",
    "revision": "fb3671ef649bfecf4879e1862db3251d"
  },
  {
    "url": "assets/js/9.c5a62afa.js",
    "revision": "415dcc8b08f774819a81efbe50013436"
  },
  {
    "url": "assets/js/app.ab453065.js",
    "revision": "d640180421a876a87edd7e7b6288e112"
  },
  {
    "url": "categories/index.html",
    "revision": "eebb5c63755374fae37f26ab9bb96a7f"
  },
  {
    "url": "CountUp.html",
    "revision": "afc660e66bd157c2f0d9e5bcb20980c8"
  },
  {
    "url": "git/index.html",
    "revision": "4ad12afad63c947bbad9d96b2e34a2ec"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "7602e244e129f99e67f1d3f709148490"
  },
  {
    "url": "tag/git/index.html",
    "revision": "362f89777a05a690b138ef496bc6dffa"
  },
  {
    "url": "tag/index.html",
    "revision": "8beced27f09c71bc6c6773748f3e2a8f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4ea60f972a563e1d40b3f07165984846"
  },
  {
    "url": "text/git-clone.png",
    "revision": "52eb5e1c556c95b63256222c35ebeae6"
  },
  {
    "url": "text/git-down.png",
    "revision": "3bb5fd2a214e3949d0255d976d3ab771"
  },
  {
    "url": "text/git-down2.png",
    "revision": "6b8a9cd680d9b259f690c53936028986"
  },
  {
    "url": "text/git-work.png",
    "revision": "932044a82c3fdf83dd5bd4039a315806"
  },
  {
    "url": "timeline/index.html",
    "revision": "aa5dc41e6f5af48db17b71228c9a6de8"
  },
  {
    "url": "vp-notes/index.html",
    "revision": "b7c0294d2b0858220df2dd61d4d191e9"
  },
  {
    "url": "vue/index.html",
    "revision": "cfbeb2200d896f0720f1fbc53b7b53a2"
  },
  {
    "url": "vue/learn-vue2.html",
    "revision": "cf7913692d95146ddaa56dc6717fc15d"
  },
  {
    "url": "vue/learn-vue3.html",
    "revision": "301563a08a15ef9e0500fceeb455b0e0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
