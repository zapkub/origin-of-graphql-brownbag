const express = require('express');
const graphql = require('./graphql');
const rest = require('./rest');

const app = express();

module.exports = {
    async start() {
      await rest(app); 
      app.listen(8080, () => {
          console.log('app is running at ' + 8080)
      })
    },
    init() {

    }
}