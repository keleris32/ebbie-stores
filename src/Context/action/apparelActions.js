import {
  ACTIVE_WAIST_APPAREL,
  ACTIVE_TIGHTS_APPAREL,
  ACTIVE_PAD_APPAREL,
} from '../../Constants/actionTypes';

export const activeWaistTab = (dispatch) => {
  dispatch({
    type: ACTIVE_WAIST_APPAREL,
  });
};

export const activeTightsTab = (dispatch) => {
  dispatch({
    type: ACTIVE_TIGHTS_APPAREL,
  });
};

export const activePadTab = (dispatch) => {
  dispatch({
    type: ACTIVE_PAD_APPAREL,
  });
};
