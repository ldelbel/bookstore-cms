const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const INITIAL_STATE = {
  booksReducer: {
    books: [
      {
        id: 1,
        title: 'Book1',
        category: 'Action',
      },
      {
        id: 2,
        title: 'Book2',
        category: 'Horror',
      },
      {
        id: 3,
        title: 'Book3',
        category: 'Adventure',
      },
    ],
  },
};

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export {
  CATEGORIES, INITIAL_STATE, CREATE_BOOK, REMOVE_BOOK,
};
