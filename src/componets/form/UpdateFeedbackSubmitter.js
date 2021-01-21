import {FireBaseUpdateFeedback} from "../../FireBase/FireBase";


class UpdateFeedbackSubmitter {


    form = null;

    constructor(form,feedbackId ,redirectCallback) {
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
        FireBaseUpdateFeedback(feedbackId,title, appName, type, feedbackDescription, this.redirectCallback);
    }


}

export default UpdateFeedbackSubmitter

