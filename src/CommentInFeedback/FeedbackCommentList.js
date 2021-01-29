import React from "react";
import FeedbackCommentItem from "./FeedbackCommentItem";
import {Box, CircularProgress} from "@material-ui/core";


class FeedbackCommentList extends React.Component {


    render() {
        if (this.props.dataStatus === 'loading') {
            return <Box><CircularProgress/></Box>
        } else if (this.props.comments.length !== 0) {
            return (this.props.comments.map((comment, index) => {
                return <FeedbackCommentItem key={index}
                                            comment={comment}/>

            }))
        } else if (this.props.dataStatus === 'error') {
            return <Box>Error</Box>
        }


            return <></>


    }

}

export default FeedbackCommentList