const http = require('http');

http.createServer((req, res) => {
  console.log(`Сервер запущен`);
});

const port = 3000;

http.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});