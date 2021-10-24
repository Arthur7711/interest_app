import { combineReducers } from "redux";
import auth from "./auth.reducer";
import contacts from "./contact.reducer";

export const root = combineReducers({
  auth,
  contacts,
});
