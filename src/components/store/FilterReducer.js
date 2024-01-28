import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAll: true,
  isWithout: true,
  isOne: true,
  isTwo: true,
  isThree: true,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAll: (state) => {
      if (state.isAll) {
        state.isAll = false
        state.isWithout = false
        state.isOne = false
        state.isTwo = false
        state.isThree = false
      } else {
        state.isAll = true
        state.isWithout = true
        state.isOne = true
        state.isTwo = true
        state.isThree = true
      }
    },
    filterWithout: (state) => {
      if (state.isAll && state.isWithout) {
        state.isAll = false
        state.isWithout = false
      } else if (state.isOne && state.isTwo && state.isThree && !state.isWithout) {
        state.isAll = true
        state.isWithout = true
      } else {
        state.isWithout = !state.isWithout
      }
    },
    filterOne: (state) => {
      if (state.isAll && state.isOne) {
        state.isAll = false
        state.isOne = false
      } else if (state.isWithout && state.isTwo && state.isThree && !state.isOne) {
        state.isAll = true
        state.isOne = true
      } else {
        state.isOne = !state.isOne
      }
    },
    filterTwo: (state) => {
      if (state.isAll && state.isTwo) {
        state.isAll = false
        state.isTwo = false
      } else if (state.isWithout && state.isOne && state.isThree && !state.isTwo) {
        state.isAll = true
        state.isTwo = true
      } else {
        state.isTwo = !state.isTwo
      }
    },
    filterThree: (state) => {
      if (state.isAll && state.isThree) {
        state.isAll = false
        state.isThree = false
      } else if (state.isWithout && state.isOne && state.isTwo && !state.isThree) {
        state.isAll = true
        state.isThree = true
      } else {
        state.isThree = !state.isThree
      }
    },
  },
})

export const { filterAll, filterWithout, filterOne, filterTwo, filterThree } = filterSlice.actions
export default filterSlice.reducer
