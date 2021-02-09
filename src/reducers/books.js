import { CREATE_BOOK, REMOVE_BOOK } from '../constants/index';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK: {
      const { id } = action.payload;
      return {
        ...state,
        books: state.books.filter(book => book.id !== id),
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
