import React from "react";


class FeedbackCommentItem extends React.Component {


    render() {

        return (
            <div>
                {this.props.comment.commentBody
                }

            </div>
        );
    }

}

export default FeedbackCommentItem