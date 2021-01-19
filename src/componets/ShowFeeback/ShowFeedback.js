import React from "react";
import FeedbackContext from "../../contextApi/FeedbackContext";
class ShowFeedback extends React.Component{


    render() {
        return (
            <div>
                <FeedbackContext.Consumer>
                    {({selectedFeedback}) => <>
                        <div><span>feedback Title:</span><span>{selectedFeedback.title}</span></div>
                        <div><span>app Name:</span><span>{selectedFeedback.appName}</span></div>
                        <div><span>Type:</span><span>{selectedFeedback.type}</span></div>
                        <div><span>feedback Description:</span><span>{selectedFeedback.feedbackDescription}</span></div>
                    </>}
                </FeedbackContext.Consumer>
            </div>
        );
    }

}

export default  ShowFeedback