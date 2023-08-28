const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

// app.use(express.static('https://hemeum.github.io/webpack-client')); // static은 static한 배포 파일들을 보내줘
// 서버를 사용할 때 프론트 화면은 build까지 하면 되고 서버로 build에 있는걸 배포하는 것.
// 즉, 프론트를 따로 배포해서 서버로 연결이 들어올 때 배포한 프론트 url을 보내주는 것이 아님!
// 서버를 배포하면 build에 있는 html 등의 static 파일을 보내주는 것.
// 배포는 localhost를 도메인으로 만드는 것임!!!!!!!

// app.use(express.static(path.resolve(__dirname,'./../webpack/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './../webpack', 'dist', 'index.html'));
// });

app.get('/', (req, res) => {
  res.send('sgasgsag')
})

app.listen(port, () => {
  console.log(`서버 열렸다. ${port}`)
});