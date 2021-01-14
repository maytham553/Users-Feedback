import AuthReducer from "./AuthReducer";
import FeedbackReducer from "./FeedbackReducer";
import {combineReducers} from "redux";

const   RootReducer = combineReducers({
    auth: AuthReducer ,
    feedbacks:FeedbackReducer
})

export default RootReducer ;