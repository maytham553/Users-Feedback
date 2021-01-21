import React from "react";
import {Form} from "@autofiy/raf-core";
import {Radio, Text, TextArea} from "@autofiy/raf-material";
import {Box, Button} from "@material-ui/core";
import FeedbackContext from "../../contextApi/FeedbackContext";
import UpdateFeedbackSubmitter from "./UpdateFeedbackSubmitter";
import {withRouter} from "react-router-dom";

class UpdateFeedbackForm extends React.Component {

    feedback = this.context.selectedFeedback.feedbackContent;
    feedbackId = this.context.selectedFeedback.feedbackId;

    render() {
        console.log(this.feedback)
        return (
            <Box display={'flex'} justifyContent={'center'}>
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
                              this.props.history.push('/Feedbacks')

                          })
                      }}
                      initialValues={this.feedback}


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

            </Box>)


    }


}

UpdateFeedbackForm.contextType = FeedbackContext;

export default withRouter(UpdateFeedbackForm)
