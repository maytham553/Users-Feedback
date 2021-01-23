import React from "react";
import './App.css';
import MainNav from "./componets/Navbar/MainNav";
import firebase from './config/FirebaseConfig';
import RoutersContainer from "./AppRouters/RoutersContainer";
import UserTypeContext from "./contextApi/UserTypeContext";

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userType: 'undefined'
        }
    }

    isLogin = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({userType: 'login'})
            } else {
                this.setState({userType: 'logout'})
            }
        })
    }

    componentDidMount() {
        this.isLogin()
    }


    render() {

        return (

            <UserTypeContext.Provider value={
                {userType: this.state.userType}
            }>
                <div className="App">
                    <MainNav/>
                    <RoutersContainer/>


                    {/*this button only on test mode*/}
                    <button onClick={() => {
                        {
                            if (this.state.userType === 'admin') {
                                this.setState({userType: "login"})
                            } else if (this.state.userType === 'login') {
                                this.setState({userType: "admin"})
                            }
                        }
                    }}
                    >
                        he is {this.state.userType}
                    </button>

                </div>
            </UserTypeContext.Provider>
        );

    }
}


export default App
