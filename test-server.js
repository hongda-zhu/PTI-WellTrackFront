const http = require('http');
const port = 3001;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Basic Server\n');
});
server.listen(port, '127.0.0.1', () => { // 明确绑定到 127.0.0.1
  console.log(`Basic server running at http://localhost:${port}/`);
});
server.on('error', (e) => { // 添加错误处理
    console.error(`Server error: ${e.message}`);
});