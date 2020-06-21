import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import books from "./books";
import book from "./book";
import review from "./review";

export default combineReducers({
  alert,
  auth,
  books,
  book,
  review,
});
