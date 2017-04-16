
const path = require('path');
const swaggerMiddleware = require('swagger-express-middleware');
const express = require('express');
const data = require('../data.json');

module.exports = async function (app) {

    app.use('/explorer', express.static(path.join(__dirname, './swagger-ui')))
    return new Promise((rs, rj) => {
        swaggerMiddleware(path.join(__dirname, 'MusicAPI.yml'), app, (err, middleware) => {
            app.use(
                middleware.files(),
                middleware.metadata(),
                middleware.CORS(),
                middleware.parseRequest(),
                middleware.validateRequest()
            );

            app.get('/artists', function (req, res) {
                res.json(data.artists);
            });
            app.get('/collections', function (req, res) {
                res.json(data.collections);
            });
            app.get('/tracks', function (req, res) {
                res.json(data.tracks);
            });
            rs();
        });

    })
}