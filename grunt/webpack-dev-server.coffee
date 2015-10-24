path = require 'path'

webpackDevConfig = require '../webpack.config.js'

proxyURL = 'http://localhost:3000'

proxyPath = (paths) ->
  unless Array.isArray paths then paths = [paths]

  # TODO: Reducer plz
  proxyObj = {}
  paths.forEach (p) ->
    if p is '*'
      proxyObj[p] = proxyURL
    else
      proxyObj[p] = path.join(proxyURL, p)
  proxyObj

module.exports =
  options:
    hot: true
    port: 9000
    webpack: webpackDevConfig
    publicPath: '/assets/'
    contentBase: './<%= package.src %>/'
    proxy: proxyPath '*'
  start:
    keepAlive: true
