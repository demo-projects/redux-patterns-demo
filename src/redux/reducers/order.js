import {UPDATE_ORDER} from "../actions/order";

const initOrder = {
  date  : null,
  bookId: null,
  email : ''
};

export function orderReducer(order = initOrder, action) {

  switch (action.type) {

    case UPDATE_ORDER:
      return {...order, ...action.payload};

    default:
      return order;
  }
}
