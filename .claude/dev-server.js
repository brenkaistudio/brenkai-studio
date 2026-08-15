/* Dev-only static server. NOT part of the site.
   The site itself has no build step and no dependencies (D16) — this exists
   only because ES modules are blocked over file://, so the pages have to be
   served over http to be tested. Uses node's built-in http module, nothing else.

   Run from the project root:  node .claude/dev-server.js
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = 4321;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    let file = path.join(ROOT, url === '/' ? 'index.html' : url);

    /* Keep requests inside the project root */
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    fs.stat(file, (err, stat) => {
      if (!err && stat.isDirectory()) file = path.join(file, 'index.html');

      fs.readFile(file, (readErr, data) => {
        if (readErr) {
          fs.readFile(path.join(ROOT, '404.html'), (fallbackErr, notFound) => {
            res.writeHead(404, { 'Content-Type': TYPES['.html'] });
            res.end(fallbackErr ? 'Not found' : notFound);
          });
          return;
        }

        res.writeHead(200, {
          'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
          'Cache-Control': 'no-store',
        });
        res.end(data);
      });
    });
  })
  .listen(PORT, () => console.log(`Brenkai dev server → http://localhost:${PORT}`));
