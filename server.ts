import * as http from "http";
import * as fs from "fs";
import * as url from "url";
import * as path from "path";

const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const mimeTypes: { [key: string]: string } = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // Parse URL to handle query parameters
  const parseUrl = url.parse(req.url || "", true);
  let filePath = parseUrl.pathname || "/";

  // Default to index.html for root path
  if (filePath === "/") filePath = "/index.html";


   // Security: prevent path traversal
   const safePath= path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
   const fullPath= path.join(__dirname, 'public', safePath);

   // Get file extension for MIME type
   const ext= path.extname(fullPath).toLowerCase();
   const contentType: string= mimeTypes[ext] || 'text/plain';

   fs.readFile(fullPath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
     if (err) {
       res.writeHead(404, { "content-Type": "text/html" });
       res.end("<h1>404 - File Not Found</h1>");
       console.log(`404: ${filePath}`);
     } else {
       res.writeHead(200, { "Content-Type": contentType });
       res.end(data);
       console.log(`Served: ${filePath}`);
     }
   });
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
