import React from "react";
import firebase from "../Config/FirebaseConfig";
import fbConfig from "../Config/FirebaseConfig";
import FeedbackCommentList from "./FeedbackCommentList";
import {Box, Grid} from "@material-ui/core";


class FeedbackCommentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbackComments: []}
    }

    getFeedbacksComment = () => {
        const user = firebase.auth().currentUser;
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks').doc(this.props.feedbackId).collection('comment');

        dbFeedbacksRef.orderBy("created")
            .onSnapshot(querySnapshot => {
                const feedbackComments = querySnapshot.docs.map(d => ({...d.data(), id: d.id}))
                this.setState({feedbackComments: feedbackComments, dataStatus: 'success'})
            })


    }

    componentDidMount() {
        this.getFeedbacksComment()
    }

    render() {
        return (
            <Grid item container justify={"center"} >
                <FeedbackCommentList comments={this.state.feedbackComments} dataStatus={this.state.dataStatus} />
            </Grid>
        );
    }


}

export default FeedbackCommentContainer