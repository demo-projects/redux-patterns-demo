import {SHOW_SPINNER, HIDE_SPINNER, ORDER_COMPLETE, ORDER_IN_PROGRESS} from "../actions/ui";

const initUi = {
  pending: false,
  orderInProcess: false
};

export function uiReducer (state = initUi, action) {

  switch (action.type) {
    case SHOW_SPINNER:
      return {...state, pending: true};

    case HIDE_SPINNER:
      return {...state, pending: false};

    case ORDER_IN_PROGRESS:
      return {...state, orderInProcess: true};

    case ORDER_COMPLETE:
      return {...state, orderInProcess: false};

    default:
      return state;
  }
}