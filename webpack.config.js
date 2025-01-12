module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        type: 'json',
      }
    ]
  }