import React from "react";
import firebase from "../../config/fbConfig";
import fbConfig from "../../config/fbConfig";
import FeedbacksList from "./FeedbacksList";
import GetFeedbacksContext from "../../contextApi/GetFeedbacksContext";


class FeedbacksLoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: [{}]}
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
        return (
            <GetFeedbacksContext.Provider value={{getFeedbacks:this.getFeedbacks}}>
                <FeedbacksList feedbacks={this.state.feedbacks}
                               dataStatus={this.state.dataStatus}/>
            </GetFeedbacksContext.Provider>
        )
    }
}

export default FeedbacksLoginContainer