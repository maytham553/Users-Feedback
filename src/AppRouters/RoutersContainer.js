import React from "react";
// import firebase from "../config/fbConfig";
import AdminRouters from "./AdminRouters";
import LoginRouters from "./LoginRouters";
import LogoutRouters from "./LogoutRouters";
import UserTypeContext from "../contextApi/UserTypeContext";


class RoutersContainer extends React.Component {


    render() {
        if (this.context.userType === 'logout') {
            return <LogoutRouters/>
        } else if (this.context.userType === 'login') {
            return <LoginRouters/>
        } else if (this.context.userType === 'admin') {
            return <AdminRouters/>
        } else {
            return <></>
        }

    }
}

RoutersContainer.contextType = UserTypeContext


export default RoutersContainer