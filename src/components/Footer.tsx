import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="w-full text-center absolute bottom-1">
      <p className="text-sm text-gray-500">{t('footer.description')}</p>
    </footer>
  )
}

export default Footer
