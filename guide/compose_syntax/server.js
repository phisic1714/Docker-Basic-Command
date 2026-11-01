import { createServer } from "node:http";
import { createReadStream } from "node:fs";

const server = createServer((req, res) => {
  const stream = createReadStream("index.html");

  stream.on("open", () => {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    stream.pipe(res);
  });

  stream.on("error", () => {
    if (!res.headersSent) {
      res.writeHead(500);
    }
    res.end("Internal Server Error");
  });
});

server.listen(3000);
