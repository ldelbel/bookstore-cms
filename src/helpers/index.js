const mapBooksToProps = state => {
  console.log(state);
  const { books } = state.booksReducer;
  return { books };
};

export default mapBooksToProps;
