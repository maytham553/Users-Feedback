import React from "react";
import firebase from "../../config/fbConfig";
import fbConfig from "../../config/fbConfig";
import FeedbacksList from "./FeedbacksList";


class FeedbacksLoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: [{}]}
    }

    getData = () => {
        const user = firebase.auth().currentUser;
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks');

        dbFeedbacksRef.where("uid", "==", user.uid).get().then(querySnapshot => {
            this.setState({feedbacks: querySnapshot.docs, dataStatus: 'success'})
        })
    }


    componentDidMount() {
        this.getData()
    }


    render() {
        return (<FeedbacksList feedbacks={this.state.feedbacks} dataStatus={this.state.dataStatus}/>)
    }
}

export default FeedbacksLoginContainer