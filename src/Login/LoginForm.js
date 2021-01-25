import React from "react";
import {Form} from "@autofiy/raf-core";
import {Text} from "@autofiy/raf-material";
import {Box, Button} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import loginSubmitter from "./LoginSubmitter";


class LoginForm extends React.Component {
    render() {
        return (
            <Box display={'flex'} justifyContent={'center'}>

                <Form fields={[
                    {as: Text, name: 'email', extra: {label: 'Email'}},
                    {as: Text, name: 'password', extra: {label: 'password'}},
                ]}
                      extra={{
                          renderOptions: {
                              actions: [
                                  (form) => <Button color={"primary"} variant={'contained'}
                                                    onClick={() => form.submit()}>SEND</Button>
                              ],
                              actionsAlignments: "center"
                          },

                      }}
                      services={{
                          submitter: (form) => new loginSubmitter(form, () => {
                              this.props.history.push('/')
                          })
                      }}
                />
            </Box>
        )


    }
}

export default withRouter(LoginForm);