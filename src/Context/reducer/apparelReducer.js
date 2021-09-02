import {
  ACTIVE_WAIST_APPAREL,
  ACTIVE_TIGHTS_APPAREL,
  ACTIVE_PAD_APPAREL,
} from '../../Constants/actionTypes';

const apparelReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIVE_WAIST_APPAREL:
      return {
        waistApparelTab: true,
        tightsApparelTab: false,
        padApparelTab: false,
      };

    case ACTIVE_TIGHTS_APPAREL:
      return {
        waistApparelTab: false,
        tightsApparelTab: true,
        padApparelTab: false,
      };

    case ACTIVE_PAD_APPAREL:
      return {
        waistApparelTab: false,
        tightsApparelTab: false,
        padApparelTab: true,
      };

    default:
      return state;
  }
};

export default apparelReducer;
