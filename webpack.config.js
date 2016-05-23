var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  
    entry: {
        RunInject: "./src/inject/RunInject.ts",
        RunNamedInject: "./src/named-inject/RunNamedInject.ts",
        RunFactoryInject: "./src/factory-inject/RunFactoryInject.ts",
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },

  target: 'node',
  devtool: 'sourcemap',
 
  externals: nodeModules,
  plugins: [
  ],
   module : {
        loaders: [
            {
                test: /\.ts?$/,
                loader : 'ts-loader',
                exclude: /node_modules/,
            }           
        ]
    },
    resolve : {
       extensions: ['',  '.webpack.js', '.ts'],
    },
    
};