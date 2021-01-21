import React from 'react';
import LoginLink from "./LoginLink";
import LogoutLink from "./LogoutLink";
import AdminLink from "./AdminLink";
import UserTypeContext from "../../contextApi/UserTypeContext";

class MainNav extends React.Component {


    render() {
        if (this.context.userType === 'logout') {
            return <LogoutLink/>
        } else if (this.context.userType === 'login') {
            return <LoginLink/>
        } else if (this.context.userType === 'admin') {
            return <AdminLink/>
        } else if(this.context.userType === 'undefined'){
            return <></>
        }else {
            return <>error in nav</>
        }
    }


}

MainNav.contextType=UserTypeContext

export default MainNav