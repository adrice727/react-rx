

var React = require('react');

module.exports = React.createClass({

  render: function render() {

    return (
        <html>
          <head>
            <title>React Isomorphic App</title>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </head>
          <body>
            <div id="app"></div>
          </body>
          <script src="http://localhost:8080/js/app.js" defer="defer"></script>
        </html>
    );
  }
});
