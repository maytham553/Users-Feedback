import React from 'react';
import {NavLink} from "react-router-dom";




class LoginLink extends React.Component {

    render() {
        return(<>
                <ul>
                    <li> <NavLink to='/Account'>account</NavLink></li>
                     <li><NavLink to='/Feedbacks'>All feedback</NavLink></li>
                    <li><NavLink to='/' ><button onClick={this.props.FireBaseLogout}>logout</button></NavLink></li>
                </ul>
            </>
        );
    }

}
export default LoginLink ;