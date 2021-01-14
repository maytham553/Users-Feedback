import firebase from "../config/fbConfig";
import fbConfig from "../config/fbConfig";

const auth = firebase.auth();
const db = firebase.firestore();

export const FireBaseLogin = (email, password, successCallback) => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
    }).then(() => {
        successCallback();
        console.log('success')
    }).catch(err => {
        console.log(err.message);
    });

}

export const FireBaseLogout = () => {
    auth.signOut().then(() => {
        console.log('sign out')

    }).catch((error) => {
        console.log(error)
    });

}
export const FireBaseAddFeedback = (title, appName, type, feedbackDescription ,redirectCallback) => {
    const uid = auth.currentUser.uid;
    db.collection('feedbacks').add({
        uid: uid,
        title: title,
        appName: appName,
        type: type,
        feedbackDescription: feedbackDescription
    }).then(() => {
        // close the create modal & reset form
        redirectCallback()
        console.log('success add')

    }).catch(err => {
        console.log(err);
    });
}

export const getData = (loginStatus, isAdmin, setfeedbacks) => {
    const user = firebase.auth().currentUser;
    const db = fbConfig.firestore();
    const dbFeedbacksRef = db.collection('feedbacks');

    if (loginStatus) {
        if (isAdmin === true) {
            dbFeedbacksRef.onSnapshot(snapshot => {
                setfeedbacks();
            })
        } else {
            dbFeedbacksRef.where("uid", "==", user.uid).onSnapshot(snapshot => {
                setfeedbacks();
            })

        }


    } else {
        this.setState({feedbacks: [{}]})
    }
}



