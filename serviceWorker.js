// cache name and assets
const organizerpwa = 'tdl-pwa-v1';
const assets = [
    "/",
    "tdl.html",
    "css/tdl.css",
    "js/tdl.js"
]
// add cache function
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(organizerpwa).then(cache => {
            cache.addAll(assets)
        })
    )
})
// fetch cache function
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
