import { createModel } from '@rematch/core'
import { RootModel } from '.'
import Cookies from 'js-cookie'

export type CommonState = {
  language: string
}

export const common = createModel<RootModel>()({
  state: {
    language: 'en',
  } as CommonState,
  reducers: {
    setLanguage(state: CommonState, language: string) {
      Cookies.set('NEXT_LOCALE', language)
      return {
        ...state,
        language,
      }
    },
  },
  effects: (dispatch) => ({
    async setLanguageAsync(payload: string) {
      dispatch.common.setLanguage(payload)
    },
  }),
})
