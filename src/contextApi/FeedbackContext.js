import React from "react";
const defaultValue = {
    uid: null,
    title: null,
    appName: null,
    type: null,
    feedbackDescription: null,
}

 const  FeedbackContext = React.createContext({
    selectedFeedback: defaultValue,
    updateSelectedFeedback: () => {}

});

export default FeedbackContext ;
