// note es6 module import style
import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from 'routes';

// note usage of const to declare app
const app = express();

// note es6 fat arrow function
app.use((req, res) => {
  const location = createLocation(req.url);
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if (!renderProps) return res.status(404).end('Not found.');

    const InitialComponent = (
      <RoutingContext {...renderProps} />
    );

    const componentHTML = renderToString(InitialComponent);

    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
    `;

    res.end(HTML);
  });
});

// note es6 export style
export default app;
