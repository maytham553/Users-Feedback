import React from "react";
import ShowButton from "../Button/ShowButton";
class FeedbackItem extends React.Component {
    render() {
        const style = {
            backgroundColor: 'gray',
            margin: '20px'
        }
        const URL = "/showFeedback/" + this.props.feedbackId
        return (
            <div style={style}>

                <div><span> Title:</span><span>{this.props.feedback.title}</span></div>
                <ShowButton feedback={this.props.feedback}/>
            </div>
        )
    }

}

export default FeedbackItem