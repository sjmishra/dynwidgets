const path = require('path')
module.exports = {
  entry: ['./src/widgetshome.js','./src/widgetadmin.js'],
  output: {
    path: __dirname + '/public/js/',
    filename: 'index.js'
  },
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
}
