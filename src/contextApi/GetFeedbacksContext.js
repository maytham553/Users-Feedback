import React from "react";

const defaultValue = {
    getFeedbacks: () => {}
}
const  GetFeedbacksContext = React.createContext({defaultValue});


export default GetFeedbacksContext ;
