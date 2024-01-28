import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCheapest: true,
  isFastest: false,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    cheapest: (state) => {
      state.isCheapest = true;
      state.isFastest = false;
    },
    fastest: (state) => {
      state.isCheapest = false;
      state.isFastest = true;
    },
  },
});

export const { cheapest, fastest } = sortSlice.actions;
export default sortSlice.reducer;
