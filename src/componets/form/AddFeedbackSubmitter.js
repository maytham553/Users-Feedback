import {FireBaseAddFeedback} from "../../FireBase/FireBase";


 class AddFeedbackSubmitter {


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
        const title = data.feedbackTitle;
        const appName = data.appName;
        const type = data.type;
        const feedbackDescription = data.feedbackDescription;
        FireBaseAddFeedback(title, appName, type, feedbackDescription ,this.redirectCallback);

    }


}
export default AddFeedbackSubmitter

