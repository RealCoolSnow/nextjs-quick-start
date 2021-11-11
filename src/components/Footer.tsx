import React from 'react'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation('footer')
  return (
    <footer className="w-full text-center absolute bottom-1">
      <p className="text-sm text-gray-500">{t('description')}</p>
    </footer>
  )
}
