import firebase from "../config/FirebaseConfig";


class AddFeedbackSubmitter {
    db = firebase.firestore();
    auth = firebase.auth();
    form = null;

    constructor(form, redirectCallback) {
        this.form = form;
        this.redirectCallback = redirectCallback;
    }

    getForm() {
        return this.form;
    }


    submit() {
        const data = this.getForm().collecting().data();
        const title = data.title;
        const appName = data.appName;
        const type = data.type;
        const feedbackDescription = data.feedbackDescription;
        const uid = this.auth.currentUser.uid;

        this.db.collection('feedbacks').add({
            uid: uid,
            title: title,
            appName: appName,
            type: type,
            feedbackDescription: feedbackDescription,
            status: "unread"
        }).then(() => {
            // close the create modal & reset Form
            this.redirectCallback()
            console.log('success add')

        }).catch(err => {
            console.log(err);
        });

    }


}

export default AddFeedbackSubmitter

