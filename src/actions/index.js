import { CREATE_BOOK, REMOVE_BOOK } from '../constants/index'

let bookID = 2;

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: {...book, id: ++bookID}
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book.id
})


export { createBook, removeBook };