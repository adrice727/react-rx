import React from 'react';
import Radium, { Style } from 'radium';

var css = [
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
  'https://fonts.googleapis.com/css?family=Raleway:300'
];

@Radium
export default class Index extends React.Component {
  render () {
    return (
        <html style={styles.html}>
          <head>
            <title>React + RX</title>
            { css.map((href, k) => <link key={ k } rel="stylesheet" type="text/css" href={ href } />) }
          </head>
          <body style={styles.body}>
            <div id="app"></div>
          </body>
          <script src="http://localhost:9000/js/app.js" defer="defer"></script>
        </html>
    );
  }
}

var styles = {
  body: {
    margin: '0',
    fontFamily: 'Raleway, sans-serif'
  }
}
