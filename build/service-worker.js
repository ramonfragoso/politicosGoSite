"use strict";var precacheConfig=[["/index.html","44e2f144fa9cdebd738c2d020b87d69a"],["/static/css/main.f99e2607.css","55d29c6901d43b7e7ea08d8a4fb7edd5"],["/static/js/main.4386aef2.js","23b154941d747300d6029bbcfffd982b"],["/static/media/politicosgologo.a8c3d0a7.png","a8c3d0a7b9ce97d576ea656ee8d73c63"],["/static/media/print1.743001fc.png","743001fc3364c77d375d32453e2b688b"],["/static/media/print2.3e24cc6f.png","3e24cc6f3e5f06fb4515b34625eb4963"],["/static/media/print3.41f3c51f.png","41f3c51f4dc2d5ff0df016c029452c6b"],["/static/media/print4.a5b08aea.png","a5b08aeaf728ad8a406fa22d90d925f9"],["/static/media/print5.b13fb843.png","b13fb843f20fdc4b881a1970b095aa39"],["/static/media/print6.a963342c.png","a963342c66fbbb0d9d1d463c5a1e4e9c"],["/static/media/print7.a2b3b992.png","a2b3b992542fb431af0b8f07c13a1bb3"],["/static/media/print8.555e3b7f.png","555e3b7f01ab30a3462c50701ba73fa6"],["/static/media/print9.0bbd0fee.png","0bbd0fee2c64a05209f839c0cbe83bfc"],["/static/media/ultimo.2580bd3f.png","2580bd3f8ca0be4d60db7b7e63187075"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});