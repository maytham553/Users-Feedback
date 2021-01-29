import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar, Tooltip} from "@material-ui/core";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {AccountCircle} from "@material-ui/icons";


class LoginLink extends React.Component {

    render() {
        const {classes} = this.props;

        return (


            <AppBar position="static">
                <Toolbar display="flex">
                    <Box>
                        <Button
                            component={NavLink}
                            to='/'
                            color="inherit"
                            startIcon={<AllInboxIcon/>}
                            className={classes.leftButton}
                        >
                            Feedbacks
                        </Button>
                    </Box>

                    <Box
                        flexGrow={1}
                        className={classes.rightButtons}
                    >
                        {/*LOGOUT*/}
                        <Tooltip title="Logout">

                            <IconButton
                                component={NavLink}
                                to='#'
                                color="inherit"
                                onClick={this.props.FireBaseLogout}
                            >
                                <ExitToAppIcon/>
                            </IconButton>
                        </Tooltip>
                        {/*ACCOUNT*/}
                        <Tooltip title="Your account details[now disables]">

                            <IconButton
                                disabled
                                component={NavLink}
                                to='/Account'
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>


        );
    }

}

export default LoginLink;