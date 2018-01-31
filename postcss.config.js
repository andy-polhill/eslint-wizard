module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      // copy pasted from .babelrc
      browsers: [
        'last 2 Firefox versions',
        'last 2 Chrome versions',
        'last 2 Edge versions',
        'last 2 Safari versions',
        'IE 11',
      ],
      features: {
        customProperties: {
          warnings: false,
          variables: Object.assign({},
            require('bw-axiom/lib/materials/cssvars-all'),
            require('bw-axiom/lib/materials/cssvars-theme-light')
          ),
        },
      },
    }),
  ],
};
