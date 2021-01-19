import React from "react";
import FeedbackContext from "../../contextApi/FeedbackContext";
import {deleteFeedback} from "../../FireBase/FireBase";

class DeleteButton extends React.Component {

    DeleteFeedback = () =>{
        if (window.confirm('Are you sure you want to delete this feedback')) {
            deleteFeedback(this.props.feedbackId)
        }
    }
    render() {
        return (
            <button onClick={this.DeleteFeedback}>Delete</button>
        )
    }

}

FeedbackContext.contextType = FeedbackContext;


export default DeleteButton