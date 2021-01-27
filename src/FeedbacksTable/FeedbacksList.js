import React from "react";
import FeedbackItem from "./FeedbackItem";
import {Box, CircularProgress, Typography} from "@material-ui/core";


class FeedbacksList extends React.Component {

    render() {

        if (this.props.dataStatus === 'loading') {
            return <Box m={5}> <CircularProgress/> </Box>


        } else if (this.props.feedbacks !== null && this.props.feedbacks.length !== 0) {
            return (this.props.feedbacks.map((feedback, index) => {
                return (
                    <FeedbackItem key={index}
                                  onDelete={this.props.onDelete}
                                  feedback={feedback}/>
                )
            }))
        } else {
            return <Box m={5}> <Typography color={"primary"}>There is no feedback</Typography>

            </Box>
        }
    }

}


export default FeedbacksList
