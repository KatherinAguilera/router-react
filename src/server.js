import express from 'express';
// mostar el home 
import React from 'react';
import App from '../dist/ssr/app';
import { StaticRouter } from 'react-router';
import reactDOMServer from 'react-dom/server'
const app = express();

app.use(express.static('dist'));
app.use('/images', express.static('images'));
// reaccione cuando el usuario ingrese
app.get('*', (req, res) => {
  console.log(req.url)
  const html = reactDOMServer.renderToString(
  <StaticRouter
    location={req.url}
  >
    <App />
  </StaticRouter>
  )
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
      <link rel="stylesheet" href="/css/app.css">
      <title>Reproductor con React</title>
    </head>
    <body>
      <div id="home-container">${html}</div>
      <div id="modal-container"></div>
      <!--<script src="http://localhost:9000/js/app.js"></script> -->
      <script src="/js/app.js"></script>
    </body>
    </html>
  `)
  res.end();
})
// prender el server

app.listen(5000)
console.log('el server prendio')