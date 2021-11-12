import { createModel } from '@rematch/core'
import { RootModel } from '.'

export type CounterState = number

export const counter = createModel<RootModel>()({
  state: 0,
  reducers: {
    inc: (state: CounterState, payload: number) => {
      return state + payload
    },
  },
  effects: (dispatch) => ({
    async incAsync(payload: number) {
      dispatch.counter.inc(payload)
    },
  }),
})
