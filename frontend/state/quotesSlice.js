// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit"


let id = 1
const getNextId = () => id++
const slice = createSlice({
  name: 'quotes',
  initialState: {
    displayAllQuotes: true,
    highlightedQuote: null,
    quotes: [
      {
        id: getNextId(),
        quoteText: "Don't cry because it's over, smile because it happened.",
        authorName: "Dr. Seuss",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "So many books, so little time.",
        authorName: "Frank Zappa",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "Be yourself; everyone else is already taken.",
        authorName: "Oscar Wilde",
        apocryphal: false,
      },
    ],
  },
  reducers: {
    deleteQuote(state, action) {
      state.quotes = state.quotes
        .filter(qt => qt.id !== action.payload)
    },
    highlightQuote(state, action) {
      if (state.highlightedQuote === action.payload) {
         state.highlightedQuote = null
      } else {
        state.highlightedQuote = action.payload
      }
    },
    fakeQuote(state, action) {
      const quote = state.quotes
        .find(qt => qt.id === action.payload)
      quote.apocryphal = !quote.apocryphal

    },
    addQuote: {
      prepare(quoteText, authorName,) {
        return { payload: { id: getNextId(), quoteText, authorName, apocryphal: false } }
      },
      reducer(state, action) {
        state.quotes.push(action.payload)
      }

    },
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes
    },



  }

})

export default slice.reducer

export const {
  deleteQuote, fakeQuote, highlightQuote, addQuote, toggleVisibility
} = slice.actions