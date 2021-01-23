import React from "react";
import {Route, Switch} from "react-router-dom";
import FeedbacksAdminContainer from "../componets/FeedbacksTable/FeedbacksAdminContainer";
import ShowFeedback from "../componets/ShowFeedback/ShowFeedback";
import UpdateFeedbackForm from "../componets/Form/UpdateFeedbackForm";

class AdminRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/Feedbacks"}><FeedbacksAdminContainer/></Route>
                <Route path={"/Account"}/>
                <Route path={"/showFeedback"}><ShowFeedback/></Route>
                <Route path={"/updateFeedback"}><UpdateFeedbackForm/></Route>



            </Switch>

        );
    }


}

export default AdminRouters