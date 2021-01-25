import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";

class FeedbackItem extends React.Component {
    db = firebase.firestore();


    deleteFeedback = () => {
        const feedbackId = this.props.feedback.id
        const onDelete = this.props.onDelete
        if (window.confirm('Are you sure you want to delete this feedback')) {
            this.db.collection("feedbacks").doc(feedbackId).delete().then(function () {
                onDelete(feedbackId);
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }
    }


    render() {
        const style = {
            backgroundColor: 'gray',
            margin: '20px'
        }


        const feedbackId = this.props.feedback.id;
        const feedbackDetails = this.props.feedback;

        return (
            <div style={style}>

                <div>
                    <span> Title:</span>
                    <span>{feedbackDetails.title}</span>
                </div>

                {/*SHOW BUTTON */}
                <button>
                    <Link
                        to={{
                            pathname: '/showFeedback',
                            state:
                                {
                                    feedbackDetails: feedbackDetails,
                                    feedbackId: feedbackId
                                }
                        }}>show</Link>
                </button>

                {/*UPDATE BUTTON */}
                <button>
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
                <button onClick={this.deleteFeedback}>Delete</button>

            </div>


        )
    }

}

export default FeedbackItem