module.exports = {
  locales: ['en', 'cn'],
  defaultLocale: 'en',
  localeDetection: true,
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
