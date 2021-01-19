import React from "react";
import FeedbackItem from "./FeedbackItem";

class FeedbacksList extends React.Component {


    render() {


        if (this.props.dataStatus === 'loading') {
            return <div>LOADING</div>
        } else if (this.props.feedbacks !== null && this.props.feedbacks.length !== 0) {
            return (this.props.feedbacks.map((feedback, index) => {
                return <FeedbackItem key={index} feedback={feedback.data()} feedbackId={feedback.id}/>
            }))

        } else {
            return <div>ERROR</div>
        }


    }

}


export default FeedbacksList