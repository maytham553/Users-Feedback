import React from "react";
import {Route, Switch} from "react-router-dom";
import AddFeedbackForm from "../componets/Form/AddFeedbackForm";
import FeedbacksLoginContainer from "../componets/FeedbacksTable/FeedbacksLoginContainer";
import ShowFeedback from "../componets/ShowFeedback/ShowFeedback";
import UpdateFeedbackForm from "../componets/Form/UpdateFeedbackForm";
class LoginRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/AddFeedback"} component={AddFeedbackForm}/>
                <Route path={"/Feedbacks"}><FeedbacksLoginContainer/></Route>
                <Route path={"/Account"}/>
                <Route path={"/showFeedback"}><ShowFeedback/></Route>
                <Route path={"/updateFeedback"}><UpdateFeedbackForm/></Route>
            </Switch>


        );
    }


}

export default LoginRouters