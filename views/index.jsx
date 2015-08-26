import React from 'react';

var css = ['http://fonts.googleapis.com/css?family=Raleway'];

var App = React.createClass({

  render: function () {
    return (
        <html style={cssReset}>
          <head>
            <title>React + RX</title>
            { css.map((href, k) => <link key={ k } rel="stylesheet" type="text/css" href={ href } />) }
          </head>
          <body style={cssReset}>
            <div id="app"></div>
          </body>
          <script src="http://localhost:9000/js/app.js" defer="defer"></script>
        </html>
    );
  }
});

module.exports = App;

var cssReset = {
  margin: '0',
  padding: '0',
};
