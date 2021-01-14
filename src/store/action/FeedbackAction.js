
import {ActionType} from "../ActionType";

const type = [{ADD:'ADD'}]
export const createFeedback = (feedback) => {

    return (dispatch , getState) => {

        dispatch({ type:ActionType.ADD_FEEDBACK ,
            feedback:feedback});

    }
}