// entry - src/app.js -> output - 
const path = require('path');

module.exports = {
    entry: './src/app.js',  //where to get code from 
    output: {
      path: path.join(__dirname, 'public'), //where to use the code
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader', //babel loader to convert es6 to es5
        test: /\.js$/, //any file that ends with .js
        exclude: /node_modules/ //excludes the node_modules folder
      },{
        use: [
          'style-loader',   //dump contents into DOM in style tag
          'css-loader',
          'sass-loader'
        ],
        test: /\.s?css$/ //any file that ends with .css
      }]
    },
    devtool: 'cheap-module-eval-source-map', //allows for easier debugging
    devServer: {
      contentBase: path.join(__dirname, 'public')   //allows for serving+building the app without 2 commands
    }
};

//loader;