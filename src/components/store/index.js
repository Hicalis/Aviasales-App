import { configureStore } from '@reduxjs/toolkit'

import sortSlice from './SortReducer'
import filterSlice from './FilterReducer'
import ticketSlice from './TicketReducer'

export const store = configureStore({
  reducer: {
    sort: sortSlice,
    filter: filterSlice,
    getTickets: ticketSlice,
  },
})
