import React from 'react';
import {NavLink} from "react-router-dom"
import {AppBar, Box, Button, IconButton, Toolbar, withStyles} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



class LoginLink extends React.Component {


    render() {
        const {classes} = this.props;

        return (
            <AppBar position="static" >
                <Toolbar display="flex">
                    <Box  >
                    <Button  component={NavLink} to='/Feedbacks' color="inherit"
                            startIcon={<AllInboxIcon/>}
                            className={classes.leftButton}> Feedbacks</Button>
                    <Button   className={classes.leftButton} component={NavLink} to='/AddFeedback' color="inherit" startIcon={<AddIcon/>}>Add
                        feedback</Button>
                    </Box>
                    <Box flexGrow={1} className={classes.rightButtons}>
                        <IconButton
                            component={NavLink}
                            to='/'
                            color="inherit"
                            onClick={this.props.FireBaseLogout}
                        >
                            <ExitToAppIcon/>
                        </IconButton>
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
        );
    }

}

export default LoginLink;