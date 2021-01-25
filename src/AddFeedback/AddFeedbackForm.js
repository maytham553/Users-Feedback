import React from "react";
import {Form} from "@autofiy/raf-core";
import {Text, TextArea, Radio} from "@autofiy/raf-material";
import {Button, Box} from "@material-ui/core";
import AddFeedbackSubmitter from "./AddFeedbackSubmitter";


class AddFeedbackForm extends React.Component {


    render() {

        return (
            <Box display={'flex'} justifyContent={'center'}>
                <Form fields={[
                    {as: Text, name: 'title', extra: {label: 'Title'}},
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
                          submitter: (form) => new AddFeedbackSubmitter(form ,() => {
                              this.props.history.push('/Feedbacks')
                          })
                      }}


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

export default AddFeedbackForm;