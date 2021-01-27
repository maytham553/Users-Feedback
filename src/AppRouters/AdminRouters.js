import React from "react";
import {Route, Switch} from "react-router-dom";
import FeedbacksAdminContainer from "../FeedbacksTable/FeedbacksAdminContainer";
import ShowFeedback from "../ShowFeedback/ShowFeedback";
import UpdateFeedbackForm from "../UpdateFeedback/UpdateFeedbackForm";

class AdminRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/"}><FeedbacksAdminContainer/></Route>
                <Route path={"/Account"}/>
                <Route path={"/showFeedback"}><ShowFeedback/></Route>
                <Route path={"/updateFeedback"}><UpdateFeedbackForm/></Route>



            </Switch>

        );
    }


}

export default AdminRouters