import React from 'react';
import {NavLink} from "react-router-dom";




class LogoutLink extends React.Component {

    render() {
        return(<>
                <ul>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                </ul>

            </>
        );
    }

}

export default LogoutLink ;