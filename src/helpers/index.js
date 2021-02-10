const mapBooksToProps = state => {
  const { books } = state.booksReducer;
  const { filter } = state.filterReducer;
  return {
    books: filter === 'All' ? books : books.filter(book => book.category === filter),
  };
};

export default mapBooksToProps;
