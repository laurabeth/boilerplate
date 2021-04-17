import { Response, Request } from "express";

const express = require('express');
const helmet = require('helmet');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');

const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(config);


app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(helmet());

app.use((_: Request, res: Response) => {
	res.redirect('/');
});

app.listen(port, () => {
	console.log(`Server now listening at http://localhost:${port}`);
});
