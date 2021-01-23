import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";

class FeedbackItem extends React.Component {
    db = firebase.firestore();
    feedbackId = this.props.feedback.id;
    feedbackDetails = this.props.feedback.data()



    DeleteFeedback = () => {
        console.log(this.feedbackDetails.title);
        this.props.onDelete(this.feedbackId)

        // if (window.confirm('Are you sure you want to delete this feedback')) {
        //     this.db.collection("feedbacks").doc(feedbackId).delete().then(function () {
        //         console.log(feedbackId);
        //         this.props.onDelete(this.feedbackId)
        //         console.log("Document successfully deleted!");
        //     }).catch(function (error) {
        //         console.error("Error removing document: ", error);
        //     });
        // }
    }


    render() {

        const style = {
            backgroundColor: 'gray',
            margin: '20px'
        }

        return (
            <div style={style}>

                <div>
                    <span> Title:</span>
                    <span>{this.feedbackDetails.title}</span>
                </div>

                {/*SHOW BUTTON */}
                <button>
                    <Link
                        to={{
                            pathname: '/showFeedback',
                            state:
                                {
                                    feedbackDetails: this.feedbackDetails,
                                    feedbackId: this.feedbackId
                                }
                        }}>show</Link>
                </button>

                {/*UPDATE BUTTON */}
                <button onClick={this.setSelectedFeedback}>
                    <Link to={{
                        pathname: './updateFeedback',
                        state: {
                            feedbackDetails: this.feedbackDetails,
                            feedbackId: this.feedbackId
                        }
                    }}>
                        UPDATE
                    </Link>
                </button>

                {/*DELETE BUTTON */}
                <button onClick={this.DeleteFeedback}>Delete</button>
            </div>
        )
    }

}

export default FeedbackItem