const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");
const root = fs.existsSync(path.join(__dirname, "dist", "index.html"))
  ? path.join(__dirname, "dist") : __dirname;
const types = { ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".css":"text/css; charset=utf-8", ".svg":"image/svg+xml", ".webp":"image/webp", ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".ico":"image/x-icon" };
function listen(port) {
  const server = http.createServer((req, res) => {
    let pathname;
    try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
    catch { res.writeHead(400).end("Bad request"); return; }
    if (pathname.endsWith("/")) pathname += "index.html";
    const file = path.resolve(root, "." + pathname);
    const relative = path.relative(root, file);
    if (relative.startsWith("..") || path.isAbsolute(relative) || relative.split(/[\\/]/).some(p => p.startsWith(".")) || !types[path.extname(file)]) {
      res.writeHead(404).end("Not found"); return;
    }
    fs.readFile(file, (error, data) => {
      if (error) { res.writeHead(404).end("Not found"); return; }
      res.writeHead(200, {"Content-Type":types[path.extname(file)], "Cache-Control":"no-store"});
      res.end(data);
    });
  });
  server.on("error", error => {
    if (error.code === "EADDRINUSE" && port < 8795) return listen(port + 1);
    console.error(error.message); process.exitCode = 1;
  });
  server.listen(port, "127.0.0.1", () => {
    const url = `http://127.0.0.1:${port}/${process.argv.includes("--admin") ? "admin/" : ""}`;
    console.log(`Eco Paint: ${url}\nKeep this window open. Ctrl+C stops the site.`);
    if (!process.argv.includes("--no-open") && process.platform === "win32") {
      spawn("cmd.exe", ["/c", "start", "", url], {windowsHide:true, stdio:"ignore"});
    }
  });
}
listen(8775);
