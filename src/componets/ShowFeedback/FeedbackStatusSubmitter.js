import {FireBaseUpdateStatus} from "../../FireBase/FireBase";


 class FeedbackStatusSubmitter{


    form = null;

    constructor(form, feedbackId , redirectCallback) {
       this.form = form;
       this.feedbackId = feedbackId;
       this.redirectCallback = redirectCallback;
    }

    getForm() {
        return this.form;
    }


    submit() {
        const data = this.getForm().collecting().data();
        const feedbackId = this.feedbackId ;
        const status = data.status
        FireBaseUpdateStatus(feedbackId, status,this.redirectCallback);

    }


}
export default FeedbackStatusSubmitter

