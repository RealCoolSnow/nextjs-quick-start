import { Dispatch } from '@/store'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

const LocaleSwitch = () => {
  const router = useRouter()
  const dispatch = useDispatch<Dispatch>()
  const onLocaleChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    dispatch.common.setLanguage(locale)
    router.replace(router.pathname, router.pathname, { locale })
  }
  return (
    <select
      className="p-2"
      onChange={onLocaleChanged}
      defaultValue={router.locale}
    >
      <option value="en">English</option>
      <option value="cn">中文简体</option>
    </select>
  )
}

export default LocaleSwitch
