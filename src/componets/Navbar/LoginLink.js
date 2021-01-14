import React from 'react';
import {NavLink} from "react-router-dom";
import {FireBaseLogout} from "../../FireBase/FireBase";




class LoginLink extends React.Component {

    render() {
        return(<>
                <ul>
                    <li> <NavLink to='/Account'>account</NavLink></li>
                    <li><NavLink to='/Feedbacks'>Feedbacks</NavLink></li>
                    <li><NavLink to='/AddFeedback'>Add feedback</NavLink></li>
                    <li><NavLink to='/' ><button onClick={FireBaseLogout}>logout</button></NavLink></li>
                </ul>
            </>
        );
    }

}
export default LoginLink ;