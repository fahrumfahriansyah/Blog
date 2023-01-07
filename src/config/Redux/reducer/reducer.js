
import { combineReducers } from "redux";
import globalRedux from "./globalRedux";
import homeRedux from "./homeRedux";
import createBlogRedux from "./createBlogRedux";
const reducer = combineReducers({ globalRedux, homeRedux, createBlogRedux })

export default reducer