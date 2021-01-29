import React from "react";
import {Form} from "@autofiy/raf-core";
import {Radio} from "@autofiy/raf-material";
import {Button, Box} from "@material-ui/core";
import FeedbackStatusSubmitter from "./FeedbackStatusSubmitter";

class FeedbackStatusForm extends React.Component{

    render() {
        console.log(this.props.feedbackStatus)
        return (
            <Box display={'flex'} justifyContent={'center'}>
                <Form fields={[
                    {
                        as: Radio, name: 'status', extra: {
                            options: [
                                {text: 'unread', value: 'unread',},
                                {text: 'under revision', value: 'underRevision'},
                                {text: 'rejected', value: 'rejected'},
                                {text: 'approved', value: 'approved'},
                            ]
                        }
                    },
                ]}
                      initialValues={{status:this.props.feedbackStatus}}
                      services={{
                          submitter: (form) => new FeedbackStatusSubmitter(form,this.props.feedbackId ,() => {
                              alert('status updated successfully')
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

            </Box>

            );
    }


}

export default FeedbackStatusForm