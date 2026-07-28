const CACHE_NAME = 'v1-cache';
// キャッシュしたいファイルのリスト（GitHub Pagesのパスに合わせて調整してください）
const ASSETS_TO_CACHE = [
    '/',
];

// 1. インストール時にファイルをキャッシュする
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('ファイルをキャッシュ中...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. リクエスト発生時にキャッシュがあればそれを返す（無ければネットワーク通信）
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
