const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const COUNTER_FILE = path.join(__dirname, 'counter.json');


function loadCounter() {
  if (!fs.existsSync(COUNTER_FILE)) {
    return { '/': 0, '/about': 0 };
  }
  const data = fs.readFileSync(COUNTER_FILE, 'utf-8');
  return JSON.parse(data);
}

function saveCounter(counter) {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify(counter, null, 2));
}

let counter = loadCounter();

app.get('/', (req, res) => {
  counter['/'] = (counter['/'] || 0) + 1;
  saveCounter(counter);
  res.send(`
        <h1>Корневая страница</h1>
        <p>Количество просмотров: ${counter['/']}</p>
        <a href="/about">Ссылка на страницу /about</a>
    `);
});

app.get('/about', (req, res) => {
  counter['/about'] = (counter['/about'] || 0) + 1;
  saveCounter(counter);
  res.send(`
        <h1>Страница about</h1>
        <p>Количество просмотров: ${counter['/about']}</p>
        <a href="/">Ссылка на страницу /</a>
    `);
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});