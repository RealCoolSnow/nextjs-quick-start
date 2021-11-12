import { createModel } from '@rematch/core'
import { RootModel } from '.'

export type CommonState = {
  language: string
}

export const common = createModel<RootModel>()({
  state: {
    language: 'en',
  } as CommonState,
  reducers: {
    setLanguage(state: CommonState, language: string) {
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
