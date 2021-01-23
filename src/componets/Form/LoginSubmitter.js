import firebase from "../../config/FirebaseConfig";


class loginSubmitter {

     auth = firebase.auth();
     db = firebase.firestore();

     FireBaseLogin = (email, password, successCallback) => {
        this.auth.signInWithEmailAndPassword(email, password).then(() => {
        }).then(() => {
            successCallback();
            console.log('success')
        }).catch(err => {
            console.log(err.message);
        });

    }

    constructor(form , redirectCallback) {
        this.form = form;
        this.redirectCallback = redirectCallback ;
    }
    form = null;

    getForm() {
        return this.form;
    }


    submit() {
        const data = this.getForm().collecting().data();
        const email = data.email;
        const password = data.password;
        this.FireBaseLogin(email, password , this.redirectCallback);
    }




}
export default loginSubmitter

