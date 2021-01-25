import React from "react";
import {Form} from "@autofiy/raf-core";
import {TextArea} from "@autofiy/raf-material";
import {Box, Button} from "@material-ui/core";
import AddCommentFormSubmitter from "./AddCommentFormSubmitter";

class FeedbackCommentForm extends React.Component {
    feedbackId = this.props.feedbackId;

    render() {
        return (
            <Box display={'flex'} justifyContent={'center'} >
                <Form fields={[
                    {
                        as: TextArea, name: 'commentBody', extra: {
                            label: 'Comment',
                            rows: 3
                        }
                    }
                ]}


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
            </Box>
        );
    }

}

export default FeedbackCommentForm