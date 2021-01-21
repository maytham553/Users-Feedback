import React from "react";
import FeedbackContext from "../../contextApi/FeedbackContext";
import FeedbackStatusForm from "./FeedbackStatusForm";

class ShowFeedback extends React.Component {


    render() {
        const feedbackContent = this.context.selectedFeedback.feedbackContent
        const feedbackId = this.context.selectedFeedback.feedbackId
        console.log(this.context)

            if (feedbackId === null) {
                return <div>Error 404</div>

            }

            return <div>

                <div><span>feedback Title:</span><span>{feedbackContent.title}</span></div>
                <div><span>app Name:</span><span>{feedbackContent.appName}</span></div>
                <div><span>Type:</span><span>{feedbackContent.type}</span></div>
                <div><span>feedback Description:</span><span>{feedbackContent.feedbackDescription}</span></div>
                <div><span>status:</span><span>{feedbackContent.status}</span></div>
                <div> <FeedbackStatusForm feedbackId={feedbackId}/></div>
            </div>


    }


}

ShowFeedback.contextType = FeedbackContext;

export default ShowFeedback