const initOrder = {
  bookId: null,
  email: ''
};

export function orderReducer(order = initOrder, action) {
  console.log('books order');
  return order;
}
