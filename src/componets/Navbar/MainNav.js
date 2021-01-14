import React from 'react';
import LoginLink from "./LoginLink";
import LogoutLink from "./LogoutLink";
import AdminLink from "./AdminLink";

class MainNav extends React.Component {


    render() {
        if (this.props.userType === 'logout') {
            return <LogoutLink/>
        } else if (this.props.userType === 'login') {
            return <LoginLink/>
        } else if (this.props.userType === 'admin') {
            return <AdminLink/>
        } else if(this.props.userType === 'undefined'){
            return <></>
        }else {
            return <>error in nav</>
        }
    }


}


export default MainNav