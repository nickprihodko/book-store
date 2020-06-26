import { ACTION_TYPES } from "../actions/types";

const initialState = {
  pager: {},
  pageOfItems: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.loadPages:
      return {
        ...state,
        pager: payload.pager,
        pageOfItems: payload.pageOfItems,
      };

    default:
      return state;
  }
}
