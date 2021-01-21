import React from "react";
import {Link} from "react-router-dom";
import FeedbackContext from "../../contextApi/FeedbackContext";

 class UpdateButton extends React.Component {
    setSelectedFeedback = () => {
        this.context.setSelectedFeedback(this.props.feedback)
    }


    render() {

        return (
            <button onClick={this.setSelectedFeedback}><Link to={'./updateFeedback'}>UPDATE</Link></button>
        );
    }

}

UpdateButton.contextType = FeedbackContext;


export default UpdateButton