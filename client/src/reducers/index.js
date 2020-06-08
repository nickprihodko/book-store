import { combineReducers } from "redux";
import alert from "./alert";
import books from "./books";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({ alert, books, auth, profile });
