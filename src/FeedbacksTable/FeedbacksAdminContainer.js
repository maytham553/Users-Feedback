import React from "react";
import fbConfig from "../Config/FirebaseConfig";
import FeedbacksList from "./FeedbacksList";
import {Grid} from "@material-ui/core";


class FeedbacksAdminContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: [{}]}
    }

    onDelete = (feedbackId) => {
        const feedbacksAfterDelete = this.state.feedbacks.filter(feedback => feedback.id !== feedbackId);
        this.setState({feedbacks: feedbacksAfterDelete})
    }

    getFeedbacks = () => {
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks');


        dbFeedbacksRef.get().then(querySnapshot => {
            const feedbacks = querySnapshot.docs.map(d => ({...d.data(), id: d.id}))
            this.setState({feedbacks: feedbacks, dataStatus: 'success'})
        })


    }


    componentDidMount() {
        this.getFeedbacks()
    }


    render() {
        return (
            <Grid container justify="center">
                <FeedbacksList
                    onDelete={this.onDelete}
                    feedbacks={this.state.feedbacks}
                    dataStatus={this.state.dataStatus}
                />
            </Grid>
        )
    }
}

export default FeedbacksAdminContainer