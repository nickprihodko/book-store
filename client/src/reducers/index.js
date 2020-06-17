import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import books from "./books";
import book from "./book";
import post from "./post";

export default combineReducers({
  alert,
  auth,
  profile,
  books,
  book,
  post,
});
