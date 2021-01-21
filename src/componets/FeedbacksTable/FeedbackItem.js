import React from "react";
import ShowButton from "../Button/ShowButton";
import DeleteButton from "../Button/DeleteButton";
import UpdateButton from "../Button/UpdateButton";

class FeedbackItem extends React.Component {

    render() {
        const style = {
            backgroundColor: 'gray',
            margin: '20px'
        }
        const feedbackContent = this.props.feedback ;
        const feedbackId = this.props.feedbackId ;
        const feedback = {feedbackContent , feedbackId}
        return (
            <div style={style}>

                <div><span> Title:</span><span>{this.props.feedback.title}</span></div>
                <ShowButton feedback={feedback}/>
                <UpdateButton feedback={feedback} feedbackId={this.props.feedbackId}/>
                <DeleteButton feedbackId={feedbackId}/>
            </div>
        )
    }

}

export default FeedbackItem