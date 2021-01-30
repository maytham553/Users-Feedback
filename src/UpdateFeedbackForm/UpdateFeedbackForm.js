import React from "react";
import {Form} from "@autofiy/raf-core";
import {Radio, Text, TextArea} from "@autofiy/raf-material";
import {Box, Button, Grid} from "@material-ui/core";
import UpdateFeedbackSubmitter from "./UpdateFeedbackSubmitter";
import {withRouter} from "react-router-dom";

class UpdateFeedbackForm extends React.Component {

     feedbackDetails = this.props.location.state.feedbackDetails;
     feedbackId = this.props.location.state.feedbackId;

    render() {
        return (
            <Grid item  md={5} >

            <Form fields={[
                    {as: Text, name: 'title', extra: {label: 'title'}},
                    {as: Text, name: 'appName', extra: {label: 'App name'}},

                    {
                        as: Radio, name: 'type', extra: {
                            __label: "Type",
                            options: [
                                {text: 'Issue', value: 'issue',},
                                {text: 'suggest', value: 'suggest'}

                            ]
                        }
                    },


                    {
                        as: TextArea, name: 'feedbackDescription', extra: {
                            label: 'Description',
                            rows: 10
                        }
                    }
                ]}
                      services={{


                          submitter: (form) => new UpdateFeedbackSubmitter(form, this.feedbackId, () => {
                              this.props.history.push('/')

                          })
                      }}
                      initialValues={this.feedbackDetails}


                      extra={{
                          renderOptions: {
                              actions: [
                                  (form) => <Button color={"primary"} variant={'contained'}
                                                    onClick={() => form.submit()}>SEND</Button>
                              ],
                              actionsAlignments: "center"
                          },

                      }}
                />

            </Grid>)


    }


}


export default withRouter(UpdateFeedbackForm)
