import React from "react";
import fbConfig from "../config/FirebaseConfig";
import FeedbacksList from "./FeedbacksList";
import {Box, Grid} from "@material-ui/core";


class FeedbacksAdminContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: [{}]}
    }

    onDelete = (feedbackId) => {
        // const feedbacksAfterDelete = this.state.feedbacks.filter(feedback=>feedback.id === feedbackId);
        // this.setState({feedbacks:feedbacksAfterDelete})
        console.log(feedbackId)
    }

    getFeedbacks = () => {
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks');
        dbFeedbacksRef.get().then(querySnapshot => {
            this.setState({feedbacks: querySnapshot.docs, dataStatus: 'success'})
        })


    }


    componentDidMount() {
        this.getFeedbacks()
    }


    render() {
        return (
            <Grid container    justify="center"   >
            <FeedbacksList onDelete={this.onDelete} feedbacks={this.state.feedbacks}
                           dataStatus={this.state.dataStatus}/>
            </Grid>
        )
    }
}

export default FeedbacksAdminContainer