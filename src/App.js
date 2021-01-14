import React from "react";
import './App.css';
import MainNav from "./componets/Navbar/MainNav";
import firebase from './config/fbConfig';
import RoutersContainer from "./AppRouters/RoutersContainer";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {userType:'undefined'}
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


    render() {

        return (


            <div className="App">
                <MainNav userType={this.state.userType}/>
                <RoutersContainer userType={this.state.userType}/>


                {/*this button only on test mode*/}
                <button onClick={() => {
                    {
                        if (this.state.userType === 'admin'){
                            this.setState({userType:"login"})
                        }else if (this.state.userType === 'login') {
                            this.setState({userType:"admin"})
                        }
                    }
                }}
                >
                   he is  {this.state.userType}
                </button>

            </div>

        );

    }
}


export default App
