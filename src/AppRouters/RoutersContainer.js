import React from "react";
import firebase from "../config/fbConfig";
import AdminRouters from "./AdminRouters";
import LoginRouters from "./LoginRouters";
import LogoutRouters from "./LogoutRouters";


class RoutersContainer extends React.Component {



    render() {
        if (this.props.userType === 'logout') {
            return <LogoutRouters/>
        }
        else if (this.props.userType === 'login') {
            return <LoginRouters/>
        }
        else if (this.props.userType === 'admin') {
            return <AdminRouters/>
        }else {
            return <></>
        }

    }
}

export default RoutersContainer