'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API_KEY: "'86e6d585-5112-4172-8ca4-ea29c7f92ad2'"
})
