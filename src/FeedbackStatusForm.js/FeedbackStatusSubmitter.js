import firebase from "firebase";

class FeedbackStatusSubmitter {

    db = firebase.firestore();
    form = null;

    constructor(form, feedbackId, redirectCallback) {
        this.form = form;
        this.feedbackId = feedbackId;
        this.redirectCallback = redirectCallback;
    }

    getForm() {
        return this.form;
    }


    submit() {
        const data = this.getForm().collecting().data();
        const feedbackId = this.feedbackId;
        const status = data.status

        this.db.collection('feedbacks')
            .doc(feedbackId)
            .update({
                status: status
            }).then(() => {
            this.redirectCallback()
            console.log('success update status')

        }).catch(err => {
            console.log(err);
        });

    }


}

export default FeedbackStatusSubmitter

