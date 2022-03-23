require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `red`,
        showSpinner: false,
        minimum: 1
      },
    },
    'gatsby-plugin-postcss',
  ],
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});