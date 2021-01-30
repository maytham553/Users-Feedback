import React from "react";
import {Route, Switch} from "react-router-dom";
import AddFeedbackForm from "../AddFeedbackForm/AddFeedbackForm";
import FeedbacksLoginContainer from "../FeedbacksTable/FeedbacksLoginContainer";
import ShowFeedback from "../ShowFeedback/ShowFeedback";
import UpdateFeedbackForm from "../UpdateFeedbackForm/UpdateFeedbackForm";

class LoginRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/AddFeedback"} component={AddFeedbackForm}/>
                <Route exact path={"/"} component={FeedbacksLoginContainer}/>
                <Route path={"/Account"}/>
                <Route path={"/showFeedback"} component={ShowFeedback}/>
                <Route path={"/updateFeedback"} component={UpdateFeedbackForm}/>
            </Switch>


        );
    }


}

export default LoginRouters