import React from "react";
import './App.css';
import MainNav from "./componets/Navbar/MainNav";
import firebase from './config/fbConfig';
import RoutersContainer from "./AppRouters/RoutersContainer";
import FeedbackContext from "./contextApi/FeedbackContext";
import UserTypeContext from "./contextApi/UserTypeContext";

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userType: 'undefined',
            selectedFeedback: {
                feedbackId: null,
                uid: null,
                title: null,
                appName: null,
                type: null,
                feedbackDescription: null,
            }
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({userType: 'login'})
            } else {
                this.setState({userType: 'logout'})
            }
        })
    }

    setSelectedFeedback = (feedback) => {
        this.setState({selectedFeedback: feedback})
    }


    render() {

        return (
            <FeedbackContext.Provider value={{
                selectedFeedback: this.state.selectedFeedback,
                setSelectedFeedback: this.setSelectedFeedback
            }}>
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
            </FeedbackContext.Provider>
        );

    }
}


export default App
