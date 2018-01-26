import {CREATE_ORDER, SUBMIT_ORDER, updateOrder} from "../actions/order";
import {orderComplete} from "../actions/ui";

// translate to update order action
export const bookOrder = ({dispatch}) => next => action => {
  next(action);

  if (action.type === CREATE_ORDER) {
    dispatch(updateOrder({date: new Date(), bookId: action.payload}))
  }
};

// update action ant notify about completing
export const completeOrder = ({dispatch}) => next => action => {
  next(action);

  if (action.type === SUBMIT_ORDER) {
    dispatch(updateOrder({email: action.payload}));
    dispatch(orderComplete())
  }
};

export const orderMdl = [bookOrder, completeOrder];