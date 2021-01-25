import React from "react";
import firebase from "../config/FirebaseConfig";
import fbConfig from "../config/FirebaseConfig";
import FeedbackCommentList from "./FeedbackCommentList";


class FeedbackCommentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbackComments: []}
    }

    getFeedbacksComment = () => {
        const user = firebase.auth().currentUser;
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks').doc(this.props.feedbackId).collection('comment');

        dbFeedbacksRef.where("uid", "==", user.uid).orderBy("created")
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
            <div>
                <hr/>
                <div>COMMENTS</div>
                <FeedbackCommentList comments={this.state.feedbackComments} dataStatus={this.state.dataStatus}/>
            </div>
        );
    }


}

export default FeedbackCommentContainer