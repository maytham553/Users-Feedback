import React from "react";

const defaultValue = {
    selectedFeedback:{

        feedbackContent: {
            status:null,
            uid: null,
            title: null,
            appName: null,
            type: null,
            feedbackDescription: null
        },
        feedbackId: {feedbackId: null,}
    },

    setSelectedFeedback:()=>{}



}

const FeedbackContext = React.createContext({defaultValue});

export default FeedbackContext;
