import React from "react";
import {Route, Switch} from "react-router-dom";
import AddFeedbackForm from "../componets/form/AddFeedbackForm";
import FeedbacksLoginContainer from "../componets/FeedbacksTable/FeedbacksLoginContainer";
class LoginRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/AddFeedback"} component={AddFeedbackForm}/>
                <Route path={"/Feedbacks"}><FeedbacksLoginContainer/></Route>
                <Route path={"/Account"}/>
            </Switch>


        );
    }


}

export default  LoginRouters