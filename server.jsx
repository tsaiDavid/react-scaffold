// note es6 module import style
import express from 'express';

// note usage of const to declare app
const app = express();

// note es6 fat arrow function
app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Isomorphic Redux Demo</title>
    </head>
    <body>
      <div id="react-view"></div>
      <script type="application/javascript" src="/bundle.js"></script>
    </body>
  </html>
  `;

  res.end(HTML);
});

// note es6 export style
export default app;
