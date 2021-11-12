/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  i18n,
  productionBrowserSourceMaps: false, //生产环境source map
  typescript: {
    //构建时忽略ts错误
    ignoreBuildErrors: false,
  },
  eslint: {
    // 构建时忽略eslint错误
    ignoreDuringBuilds: false,
  },
  //自定义webpack
  /*
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: pluginOptions.options,
        },
      ],
    })
    return config
  },*/
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://dev.yourserver/:path*', // Proxy to Backend
      },
    ]
  },
}
