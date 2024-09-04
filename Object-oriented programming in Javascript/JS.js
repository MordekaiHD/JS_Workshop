const http = require('http');

// Счетчики просмотров для каждой страницы
let homeViewCount = 0;
let aboutViewCount = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    homeViewCount++;  // Увеличиваем счетчик для главной страницы
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>Главная страница</h1>`);
    res.write(`<p>Эта страница была просмотрена ${homeViewCount} раз(а).</p>`);
    res.write(`<a href="/about">Перейти на страницу "О нас"</a>`);
    res.end();
  } else if (req.url === '/about') {
    aboutViewCount++;  // Увеличиваем счетчик для страницы "О нас"
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>Страница "О нас"</h1>`);
    res.write(`<p>Эта страница была просмотрена ${aboutViewCount} раз(а).</p>`);
    res.write(`<a href="/">Перейти на главную страницу</a>`);
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>404 - Страница не найдена</h1>`);
    res.write(`<a href="/">Перейти на главную страницу</a>`);
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
