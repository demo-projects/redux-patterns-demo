const initUi = {
  pending: false,
  orderInProcess: false
};

export function uiReducer (state = initUi, action) {
  console.log('ui reducer');
  return state;
}