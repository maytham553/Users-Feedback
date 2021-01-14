import { FireBaseLogin} from "../../FireBase/FireBase";



 class loginSubmitter {


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
        FireBaseLogin(email, password , this.redirectCallback);
    }




}
export default loginSubmitter

