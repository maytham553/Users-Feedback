import React from "react";
import {Route, Switch} from "react-router-dom";
import LoginForm from "../componets/form/LoginForm";

class Routers extends React.Component {


    render() {
        return (
            <Switch>
                <Route path={"/login"} component={LoginForm}/>
            </Switch>
        )
    }
}

export default Routers