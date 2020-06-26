import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import books from "./books";
import book from "./book";
import review from "./review";
import pages from "./pages";

export default combineReducers({
  alert,
  auth,
  books,
  book,
  review,
  pages,
});
