import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar} from "@material-ui/core";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {AccountCircle} from "@material-ui/icons";




class LoginLink extends React.Component {

    render() {
        const {classes} = this.props;

        return(


             <AppBar position="static" >
                 <Toolbar display="flex">
                     <Box  >
                         <Button  component={NavLink} to='/Feedbacks' color="inherit"
                                  startIcon={<AllInboxIcon/>}
                                  className={classes.leftButton}> Feedbacks</Button>
                     </Box>

                     <Box flexGrow={1} className={classes.rightButtons}>
                         {/*LOGOUT*/}
                         <IconButton
                             component={NavLink}
                             to='/'
                             color="inherit"
                             onClick={this.props.FireBaseLogout}
                         >
                             <ExitToAppIcon/>
                         </IconButton>

                         {/*ACCOUNT*/}
                         <IconButton
                             component={NavLink}
                             to='/Account'
                             color="inherit"
                         >
                             <AccountCircle/>
                         </IconButton>
                     </Box>
                 </Toolbar>
             </AppBar>

             // <>
        //         <ul>
        //             <li> <NavLink to='/Account'>account</NavLink></li>
        //              <li><NavLink to='/Feedbacks'>All feedback</NavLink></li>
        //             <li><NavLink to='/' ><button onClick={this.props.FireBaseLogout}>logout</button></NavLink></li>
        //         </ul>
        //     </>
        );
    }

}
export default LoginLink ;