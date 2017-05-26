const webpack=require('webpack');
const path=require('path');

module.exports={
  entry: './scripts/index.js',
  output: {
    path: path.resolve(__dirname,'./dist/js'),
    filename: 'index.bundle.js',
  },
  devtool:'source-map',
  module: {
    rules: [
      {
        test:/\.css$/,    
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'}
        ]
      }
    ]
  },
  plugins:[
  
  ]

 
}