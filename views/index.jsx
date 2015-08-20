import React from 'react';

var App = React.createClass({

  render: function () {
    return (
        <html>
          <head>
            <title>React + RX</title>
          </head>
          <body>
            <div id="app"></div>
          </body>
          <script src="http://localhost:9000/js/app.js" defer="defer"></script>
        </html>
    );
  }
});

module.exports = App;
