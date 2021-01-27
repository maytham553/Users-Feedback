import React from 'react';
import LoginLink from "./LoginLink";
import AdminLink from "./AdminLink";
import UserTypeContext from "../../contextApi/UserTypeContext";
import firebase from "../../config/FirebaseConfig";
import LoginForm from "../../Login/LoginForm";
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {},

    rightButtons: {
        textAlign: 'right'
    },
    leftButton: {
        marginLeft: '3vw'
    }
});

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
        const {classes} = this.props;
        if (this.context.userType === 'logout') {
            return <LoginForm/>
        } else if (this.context.userType === 'login') {
            return <LoginLink classes={classes} FireBaseLogout={this.FireBaseLogout}/>
        } else if (this.context.userType === 'admin') {
            return <AdminLink classes={classes} FireBaseLogout={this.FireBaseLogout}/>
        } else if (this.context.userType === 'undefined') {
            return <></>
        } else {
            return <>error in nav</>
        }
    }


}

MainNav.contextType = UserTypeContext

export default withStyles(styles)(MainNav)