import React from "react";
import firebase from "../../config/FirebaseConfig";
import fbConfig from "../../config/FirebaseConfig";
import FeedbacksList from "./FeedbacksList";


class FeedbacksLoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: [{}]}
    }

    onDelete = (feedbackId) => {
         const feedbacksAfterDelete =this.state.feedbacks.filter(feedback=>feedback.id !== feedbackId);
        feedbacksAfterDelete.map(a =>{ console.log(a.data().title)})
        this.setState({feedbacks:feedbacksAfterDelete})
    }

    getFeedbacks = () => {
        const user = firebase.auth().currentUser;
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks');

        dbFeedbacksRef.where("uid", "==", user.uid).get().then(querySnapshot => {
            this.setState({feedbacks: querySnapshot.docs, dataStatus: 'success'})
        })
    }


    componentDidMount() {
        this.getFeedbacks()
    }


    render() {
        // if (this.state.feedbacks.length > 1) {
        //     this.state.feedbacks.map(a => {
        //         console.log(a.data().title)
        //     })
        //
        // }
        return (
                <FeedbacksList feedbacks={this.state.feedbacks}
                               dataStatus={this.state.dataStatus}
                               onDelete={this.onDelete}/>
        )
    }
}

export default FeedbacksLoginContainer