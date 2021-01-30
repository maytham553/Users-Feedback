import React from "react";
import firebase from "../Config/FirebaseConfig";
import fbConfig from "../Config/FirebaseConfig";
import FeedbacksList from "./FeedbacksList";
import {Box} from "@material-ui/core";


class FeedbacksLoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: []}
    }

    onDelete = (feedbackId) => {
        const feedbacksAfterDelete = this.state.feedbacks.filter(feedback => feedback.id !== feedbackId);
        this.setState({feedbacks: feedbacksAfterDelete})
    }

    getFeedbacks = () => {
        const user = firebase.auth().currentUser;
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks');

        dbFeedbacksRef.where("uid", "==", user.uid)
            .get()
            .then(querySnapshot => {

                const feedbacks = querySnapshot.docs.map(d => ({...d.data(), id: d.id}))
                this.setState({feedbacks: feedbacks, dataStatus: 'success'})
            })
    }


    componentDidMount() {
        this.getFeedbacks()
    }


    render() {

        return (<Box>
                <FeedbacksList
                    feedbacks={this.state.feedbacks}
                    dataStatus={this.state.dataStatus}
                    onDelete={this.onDelete}
                />
            </Box>
        )
    }
}

export default FeedbacksLoginContainer