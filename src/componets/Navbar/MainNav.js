import React from 'react';
import LoginLink from "./LoginLink";
import AdminLink from "./AdminLink";
import UserTypeContext from "../../contextApi/UserTypeContext";
import firebase from "../../config/FirebaseConfig";
import LoginForm from "../Form/LoginForm";

class MainNav extends React.Component {

     auth = firebase.auth();
     db = firebase.firestore();


     FireBaseLogout = () => {
        this.auth.signOut().then(() => {
            console.log('sign out')

        }).catch((error) => {
            console.log(error)
        });

    }

    render() {
        if (this.context.userType === 'logout') {
            return <LoginForm/>
        } else if (this.context.userType === 'login') {
            return <LoginLink FireBaseLogout={this.FireBaseLogout} />
        } else if (this.context.userType === 'admin') {
            return <AdminLink FireBaseLogout={this.FireBaseLogout} />
        } else if(this.context.userType === 'undefined'){
            return <></>
        }else {
            return <>error in nav</>
        }
    }


}

MainNav.contextType=UserTypeContext

export default MainNav