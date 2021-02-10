const mapBooksToProps = state => {
  console.log(state.filterReducer.filter);
  const { books } = state.booksReducer;
  return { books };
};

export default mapBooksToProps;
