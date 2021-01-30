import React from "react";
import {Route, Switch} from "react-router-dom";
import FeedbacksAdminContainer from "../FeedbacksTable/FeedbacksAdminContainer";
import ShowFeedback from "../ShowFeedback/ShowFeedback";
import UpdateFeedbackForm from "../UpdateFeedbackForm/UpdateFeedbackForm";

class AdminRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={FeedbacksAdminContainer}/>
                <Route path={"/Account"}/>
                <Route path={"/showFeedback"} component={ShowFeedback}/>
                <Route path={"/updateFeedback"} component={UpdateFeedbackForm}/>
            </Switch>

        );
    }


}

export default AdminRouters