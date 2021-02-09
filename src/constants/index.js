const CATEGORIES = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

const INITIAL_STATE = {
  books: [
    { id: 1,
      title: 'Book1',
      category: 'Action'
    },
    { id: 2,
      title: 'Book2',
      category: 'Horror'
    }
  ]
}

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';


export { CATEGORIES, INITIAL_STATE, CREATE_BOOK, REMOVE_BOOK };
