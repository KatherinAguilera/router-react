const express = require('express');
const app = express();
// reaccione cuando el usuario ingrese
app.get('*', (req, res) => {
  console.log(req.url)
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
      <!-- <link rel="stylesheet" href="dist/css/home.5c80894d56b617dddab4.css"> -->
      <title>Reproductor con React</title>
    </head>
    <body>
      <div id="home-container">Hola React! ${req.url}</div>
      <div id="modal-container"></div>
      <script src="http://localhost:9000/js/app.js"></script>
      <!-- <script src="dist/js/home.5c80894d56b617dddab4.js"></script> -->
    </body>
    </html>
  `)
  res.end();
})
// prender el server

app.listen(5000)
console.log('el server prendio')