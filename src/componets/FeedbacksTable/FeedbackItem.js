import React from "react";


class FeedbackItem extends React.Component {
    render() {
        const style = {
            backgroundColor: 'gray',
            margin: '20px'
        }
        return (
            <div style={style}>

                <div><span>feedback Title:</span><span>{this.props.feedback.feedbackTitle}</span></div>
                <div><span>app Name:</span><span>{this.props.feedback.appName}</span></div>
                <div><span>Type:</span><span>{this.props.feedback.type}</span></div>
                <div><span>feedback Description:</span><span>{this.props.feedback.feedbackDescription}</span></div>

            </div>
        )
    }

}

export default FeedbackItem