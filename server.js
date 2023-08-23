const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

// app.use(express.static('https://hemeum.github.io/webpack-client')); // static은 static한 배포 파일들을 보내줘

app.use(express.static('./../webpack/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../webpack', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`서버 열렸다. ${port}`)
});