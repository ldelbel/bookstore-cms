const mapBooksToProps = state => {
  const { books } = state.booksReducer;
  return { books };
};

export default mapBooksToProps;
