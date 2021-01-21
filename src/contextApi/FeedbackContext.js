import React from "react";

const defaultValue = {
    feedbackContent: {
        status:null,
        uid: null,
        title: null,
        appName: null,
        type: null,
        feedbackDescription: null
    },
    feedbackId: {feedbackId: null,}

}

const FeedbackContext = React.createContext({
    selectedFeedback: defaultValue,
    setSelectedFeedback: () => {
    }

});

export default FeedbackContext;
