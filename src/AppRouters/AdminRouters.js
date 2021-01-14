import React from "react";
import {Route, Switch} from "react-router-dom";
import FeedbacksAdminContainer from "../componets/FeedbacksTable/FeedbacksAdminContainer";

class AdminRouters extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/Feedbacks"}><FeedbacksAdminContainer/></Route>
                <Route path={"/Account"}/>
            </Switch>

        );
    }


}

export default AdminRouters