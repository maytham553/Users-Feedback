import React from "react";
import MainNav from "./Navbar/MainNav";
import firebase from './Config/FirebaseConfig';
import RoutersContainer from "./AppRouters/RoutersContainer";
import UserTypeContext from "./Context/UserTypeContext";
import {Box, Button, Container, Grid} from "@material-ui/core";

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
                <Box className="App">
                    <MainNav/>

                    <Container>

                        <Box>
                            <RoutersContainer/>
                        </Box>
                        {/*this button only on test mode*/}

                        <Box>
                        <Button variant={"contained"} onClick={() => {
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
                        </Button>
                        </Box>
                    </Container>

                </Box>
            </UserTypeContext.Provider>
        );

    }
}


export default App
