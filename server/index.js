const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const graphql = require('./graphql')
const rest = require('./rest')

const app = express()

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
app.use(morgan('tiny'))

module.exports = {
  async start () {
      // inject app to graphql init
    await graphql(app)

      // inject app to swagger init
    await rest(app)

    app.listen(8080, () => {
      console.log('app is running at ' + 8080)
    })
  },
  init () {

  }
}
