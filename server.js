import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, resolve, normalize } from 'node:path';
import http from 'node:http';

const port = Number(process.env.PORT) || 3000;
const root = resolve('dist');
const types = { '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon', '.html': 'text/html' };

http.createServer((req, res) => {
  const requestPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const candidate = normalize(resolve(root, `.${requestPath}`));
  const file = candidate.startsWith(root) && existsSync(candidate) && statSync(candidate).isFile() ? candidate : resolve(root, 'index.html');
  res.writeHead(200, { 'Content-Type': `${types[extname(file)] || 'application/octet-stream'}; charset=utf-8` });
  createReadStream(file).pipe(res);
}).listen(port, '0.0.0.0', () => console.log(`Site is listening on port ${port}`));
