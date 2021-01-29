import React from "react";
import {Form, GlobalEvents} from "@autofiy/raf-core";
import {TextArea} from "@autofiy/raf-material";
import {Box, Button, Grid} from "@material-ui/core";
import AddCommentFormSubmitter from "./AddCommentFormSubmitter";

class FeedbackCommentForm extends React.Component {
    feedbackId = this.props.feedbackId;

    render() {
        return (
            <Grid item  md={12}  justifyContent={'center'} >

                <Form fields={[
                    {
                        as: TextArea, name: 'commentBody', extra: {
                            label: 'Comment',
                            rows: 3
                        }
                    }
                ]}
                      listen={{
                          [GlobalEvents.SUBMIT_SUCCEEDED]: (form, data) => {
                              console.log(data);
                              form.value().clear();
                          }
                      }}

                      services={{

                          submitter: (form) => new AddCommentFormSubmitter(form, this.feedbackId)
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
            </Grid>
        );
    }

}

export default FeedbackCommentForm