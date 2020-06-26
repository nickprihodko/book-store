import { ACTION_TYPES } from "./types";

import { getPages } from "../api/pages";

// load pages
export const loadPages = (location, currentPage) => async (dispatch) => {
  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page")) || 1;
  if (page !== currentPage) {
    await getPages(page)
      .then((res) => {
        dispatch({
          type: ACTION_TYPES.loadPages,
          payload: res.data,
        });
      })
      .catch((err) => {});

    // -----------------------------------

    // fetch(`/api/items?page=${page}`, { method: "GET" })
    //   .then((response) => response.json())
    //   .then(({ pager, pageOfItems }) => {
    //     this.setState({ pager, pageOfItems });
    //   });
  }
};
