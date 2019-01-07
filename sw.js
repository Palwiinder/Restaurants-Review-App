const staticCache = 'my-cache-2';


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCache).then(function (caches) {
            return caches.addAll(
                ["./img/1.jpg",
                    "./img/2.jpg",
                    "./img/3.jpg",
                    "./img/4.jpg",
                    "./img/5.jpg",
                    "./img/6.jpg",
                    "./img/7.jpg",
                    "./img/8.jpg",
                    "./img/9.jpg",
                    "./img/10.jpg",
                    "./img/icons-144.png",
                    "./js/main.js",
                    "./js/dbhelper.js",
                    "./js/restaurant_info.js",
                    "./css/styles.css",
                    "./data/restaurants.json",
                    "/",
                    "/index.html",
                    "/restaurant.html",
                    "./img/icons-144.png",
                    "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
                    "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
                    "/manifest.json",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1539.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1540.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png",
                    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png",
                    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1203/1539.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "https://api.tiles.mapbox.com/v4/mapbox.streets/12/1209/1539.jpg70?access_token=pk.eyJ1IjoicGFsd2luZGVyIiwiYSI6ImNqcHk2cXd6eTFsMmg0Mm50Z3Vic2pxankifQ.q-VdQWBs89UmDI9xrFlQBg",
                    "./restaurant.html?id=1",
                    "./restaurant.html?id=2",
                    "./restaurant.html?id=3",
                    "./restaurant.html?id=4",
                    "./restaurant.html?id=5",
                    "./restaurant.html?id=6",
                    "./restaurant.html?id=7",
                    "./restaurant.html?id=8",
                    "./restaurant.html?id=9",
                    "./restaurant.html?id=10"

                ]
            )
        })
    );
})

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheNames) {
                    return cacheNames.startsWith('my-') && cacheNames !== staticCache
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            )
        })
    )
})
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    )
})