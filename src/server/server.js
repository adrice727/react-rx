import express from "express";
import React from "react";
import Router from "react-router";
import 'babel/register';

const app = express();

app.set('views', './views');

var engineOptions = { transformViews: false };
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine(engineOptions));

import routes from "../shared/routes";

app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
