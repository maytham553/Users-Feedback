import React from "react";
import FeedbackCommentItem from "./FeedbackCommentItem";


class FeedbackCommentList extends React.Component {


    render() {
        console.log(this.props.dataStatus)
        if (this.props.dataStatus === 'loading') {
            return <div>LOADING</div>
        } else if (this.props.comments.length !== 0) {
            return (this.props.comments.map((comment, index) => {
                return <FeedbackCommentItem key={index}
                                             comment={comment}/>

            }))
        } else if (this.props.dataStatus === 'error') {
            return <div>Error</div>
        } else {
            return <div>there is no comment</div>
        }

    }

}

export default FeedbackCommentList