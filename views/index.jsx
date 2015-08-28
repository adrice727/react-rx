import React from 'react';

var css = [
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
  'http://fonts.googleapis.com/css?family=Raleway'
];

export default class Index extends React.Component {

  render () {
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
}

var cssReset = {
  margin: '0',
  padding: '0',
};
