import React from "react";
import {Route, Switch} from "react-router-dom";
import FeedbacksAdminContainer from "../componets/FeedbacksTable/FeedbacksAdminContainer";
import ShowFeedback from "../componets/ShowFeeback/ShowFeedback";

class AdminRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/Feedbacks"}><FeedbacksAdminContainer/></Route>
                <Route path={"/Account"}/>
                <Route path={"/showFeedback"}><ShowFeedback/></Route>



            </Switch>

        );
    }


}

export default AdminRouters