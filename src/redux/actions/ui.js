export const SHOW_SPINNER      = '[ui] show spinner';
export const HIDE_SPINNER      = '[ui] hide spinner';
export const ORDER_IN_PROGRESS = '[ui] Order in progress';
export const ORDER_COMPLETE    = '[ui] Order complete';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER
});

export const orderInProgress = () => ({
  type: ORDER_IN_PROGRESS
});

export const orderComplete = () => ({
  type: ORDER_COMPLETE
});


