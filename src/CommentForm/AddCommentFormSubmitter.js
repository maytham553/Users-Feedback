import firebase from "../Config/FirebaseConfig";
import {GlobalEvents} from "@autofiy/raf-core";


class AddCommentFormSubmitter {
    db = firebase.firestore();
    auth = firebase.auth();


    form = null;

    constructor(form, feedbackId) {
        this.form = form;
        this.feedbackId = feedbackId;
    }

    getForm() {
        return this.form;
    }


    submit() {
        const data = this.getForm().collecting().data();
        const feedbackId = this.feedbackId;
        const uid = this.auth.currentUser.uid;
        this.db.collection('feedbacks').doc(feedbackId).collection('comment').add({
           uid:uid ,
           commentBody:data.commentBody,
            created: firebase.firestore.Timestamp.now()


        }).then(() => {
            console.log('add comment successfully')
            this.getForm().event().emit(GlobalEvents.SUBMIT_SUCCEEDED , {});
        }).catch(err => {
            console.log(err);
        });
    }


}

export default AddCommentFormSubmitter

