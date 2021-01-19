import React from "react";
import {Route, Switch} from "react-router-dom";
import AddFeedbackForm from "../componets/form/AddFeedbackForm";
import FeedbacksLoginContainer from "../componets/FeedbacksTable/FeedbacksLoginContainer";
import ShowFeedback from "../componets/ShowFeeback/ShowFeedback";
class LoginRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/AddFeedback"} component={AddFeedbackForm}/>
                <Route path={"/Feedbacks"}><FeedbacksLoginContainer/></Route>
                <Route path={"/Account"}/>
                <Route path={"/showFeedback"}><ShowFeedback/></Route>

            </Switch>


        );
    }


}

export default  LoginRouters