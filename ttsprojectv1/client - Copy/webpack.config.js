const path = require('path');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/index.js',
  output: {
    filename: 'my-react-sdk.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyReactSDK',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Add this line for handling CSS files
      },
    ],
  },
};
