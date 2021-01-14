import React from "react";
import fbConfig from "../../config/fbConfig";
import FeedbacksList from "./FeedbacksList";


class FeedbacksAdminContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataStatus: 'loading', feedbacks: [{}]}
    }

    getData = () => {
        const db = fbConfig.firestore();
        const dbFeedbacksRef = db.collection('feedbacks');
        dbFeedbacksRef.get().then(querySnapshot => {
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

export default FeedbacksAdminContainer