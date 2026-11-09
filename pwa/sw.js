var V="ba-__V__";
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(["./","index.html"])}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET"||e.request.url.indexOf(location.origin)!==0)return;e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(n){var cp=n.clone();caches.open(V).then(function(c){c.put(e.request,cp)});return n})}))});
