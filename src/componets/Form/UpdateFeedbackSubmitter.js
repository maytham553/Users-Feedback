import firebase from "../../config/FirebaseConfig";


class UpdateFeedbackSubmitter {
    db = firebase.firestore();
    auth = firebase.auth();


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
        const title = data.title;
        const feedbackId = this.feedbackId;
        const appName = data.appName;
        const type = data.type;
        const feedbackDescription = data.feedbackDescription;
        this.db.collection('feedbacks').doc(feedbackId).update({
            title: title,
            appName: appName,
            type: type,
            feedbackDescription: feedbackDescription
        }).then(() => {
            // close the create modal & reset Form
            this.redirectCallback()
            console.log('success update')

        }).catch(err => {
            console.log(err);
        });
    }


}

export default UpdateFeedbackSubmitter

