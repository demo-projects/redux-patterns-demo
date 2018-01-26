export const CREATE_ORDER    = '[order] Create';
export const UPDATE_ORDER    = '[order] Update';
export const SUBMIT_ORDER = '[order] Complete order';

export const createOrder = (bookId) => ({
  type: CREATE_ORDER,
  payload: bookId
});

export const updateOrder = (detalis) => ({
  type: UPDATE_ORDER,
  payload: detalis
});

export const submitOrder = (email) => ({
  type: SUBMIT_ORDER,
  payload: email
});

