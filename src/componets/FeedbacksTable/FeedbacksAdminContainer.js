import React from "react";
import fbConfig from "../../config/fbConfig";
import FeedbacksList from "./FeedbacksList";
import GetFeedbacksContext from "../../contextApi/GetFeedbacksContext";


class FeedbacksAdminContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: [{}]}
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
            <GetFeedbacksContext.Provider value={{getFeedbacks: this.getFeedbacks}}>
                <FeedbacksList feedbacks={this.state.feedbacks} dataStatus={this.state.dataStatus}/>
            </GetFeedbacksContext.Provider>)
    }
}

export default FeedbacksAdminContainer