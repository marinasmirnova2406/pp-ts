module.exports = {
  eslint: {
    enable: true,
    mode: 'extends',
    configure: {
      rules: {
        'react/prop-types': 'off',
      },
    },
  },
    webpack: {
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
    },
  };