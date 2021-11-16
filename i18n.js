module.exports = {
  locales: ['en', 'cn'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/locales/${locale}/${namespace}`).then((m) => m.default),
}
