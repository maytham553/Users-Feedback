import React from "react";
import {deleteFeedback} from "../../FireBase/FireBase";
import GetFeedbacksContext from "../../contextApi/GetFeedbacksContext";
class DeleteButton extends React.Component {

    DeleteFeedback = () => {
        if (window.confirm('Are you sure you want to delete this feedback')) {
            deleteFeedback(this.props.feedbackId)
            this.context.getFeedbacks();
        }
    }

    render() {
        return (
            <button onClick={this.DeleteFeedback}>Delete</button>
        )
    }

}
DeleteButton.contextType = GetFeedbacksContext;



export default DeleteButton