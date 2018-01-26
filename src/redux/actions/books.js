export const GET_BOOKS           = '[books] GET';
export const FETCH_BOOKS_SUCCESS = '[books] Fetch success';
export const FETCH_BOOKS_ERROR   = '[books] Fetch Error';
export const UPDATE_BOOKS        = '[books] Update';
export const SELECT_BOOK         = '[books] Select';

export const getBooks = () => ({
  type: GET_BOOKS
});

export const updateBooks = (data) => ({
  type   : UPDATE_BOOKS,
  payload: data
});

export const selectBook = (bookId) => ({
  type   : SELECT_BOOK,
  payload: bookId
});
