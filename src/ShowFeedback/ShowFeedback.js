import React from "react";
import UserTypeContext from "../Context/UserTypeContext";
import {withRouter} from 'react-router-dom';
import FeedbackStatusForm from "../FeedbackStatusForm.js/FeedbackStatusForm";
import {Box, Grid, Typography, withStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import FeedbackCommentContainer from "../CommentInFeedback/FeedbackCommentContainer";
import FeedbackCommentForm from "../CommentForm/FeedbackCommentForm";


const styles = theme => ({
    root: {
        marginTop: '20px',
        justifyContent: 'center',
    },

    Label: {
        textAlign: 'center',
        borderRadius: '4px',
        color: grey[600],
        backgroundColor: grey[200],
        marginRight: '20px',
        marginLeft: '8px',
        padding: '5px',
        fontSize: '15px',
    },
    CommentContainer: {
        textAlign: 'center',
        marginTop: '40px',
    },
    text: {
        backgroundColor: grey[50],
        borderRadius: '4px',
        padding: '8px',
        overflowWrap: 'anywhere'
    }
});

class ShowFeedback extends React.Component {

    render() {
        const {userType} = this.context;
        const feedbackDetails = this.props.location.state.feedbackDetails;
        const feedbackId = this.props.location.state.feedbackId;
        const {classes} = this.props;


        if (feedbackId === null && feedbackId === undefined) {
            return <Box><Typography component={'h4'} color={"secondary"}>Error 404</Typography> </Box>
        }

        if (userType === 'admin') {
            return (
                <Box>

                    <Grid container item md={12} direction='column' spacing={5} className={classes.root}
                          justify={"center"}>


                        <Grid item container md={12} justify={"center"}>
                            <Grid item className={classes.Label} md={2}>Title</Grid>
                            <Grid item md={3} className={classes.text}>{feedbackDetails.title}</Grid>
                        </Grid>
                        <Grid item container md={12} justify={"center"}>
                            <Grid item className={classes.Label} md={2}>App name</Grid>
                            <Grid item md={3} className={classes.text}>{feedbackDetails.appName}</Grid>
                        </Grid>
                        <Grid item container md={12} justify={"center"}>
                            <Grid item className={classes.Label} md={2}>Type</Grid>
                            <Grid item md={3} className={classes.text}>{feedbackDetails.type}</Grid>
                        </Grid>
                        <Grid item container md={12} justify={"center"}>
                            <Grid item className={classes.Label} md={2}>DESC.</Grid>
                            <Grid item md={3} className={classes.text}>
                                <Typography
                                >{feedbackDetails.feedbackDescription}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item md={12}>
                            <FeedbackStatusForm feedbackId={feedbackId} feedbackStatus={feedbackDetails.status}/>
                        </Grid>
                        <Grid item container md={12} justify={"center"}>
                            {/*Feedback Comment Form*/}
                            <Grid item container md={5}>
                                <FeedbackCommentForm feedbackId={feedbackId}/>
                            </Grid>
                            {/*Feedback Comment */}
                            {/*<Grid item className={classes.Label} md={1}>Comments</Grid>*/}
                            <Grid container item md={12} className={classes.CommentContainer} justify={"center"}>
                                <FeedbackCommentContainer feedbackId={feedbackId}/>
                            </Grid>
                        </Grid>


                    </Grid>
                </Box>)
        }

        return (

            <Grid container item md={12} direction='column' spacing={5} className={classes.root} justify={"center"}>

                <Grid item container md={12} justify={"center"}>
                    <Grid item className={classes.Label} md={2}>Title</Grid>
                    <Grid item md={3} className={classes.text}>{feedbackDetails.title}</Grid>
                </Grid>
                <Grid item container md={12} justify={"center"}>
                    <Grid item className={classes.Label} md={2}>App name</Grid>
                    <Grid item md={3} className={classes.text}>{feedbackDetails.appName}</Grid>
                </Grid>
                <Grid item container md={12} justify={"center"}>
                    <Grid item className={classes.Label} md={2}>Type</Grid>
                    <Grid item md={3} className={classes.text}>{feedbackDetails.type}</Grid>
                </Grid>
                <Grid item container md={12} justify={"center"}>
                    <Grid item className={classes.Label} md={2}>DESC.</Grid>
                    <Grid item md={3} className={classes.text}>
                        {feedbackDetails.feedbackDescription}
                    </Grid>
                </Grid>


                <Grid item container md={12} justify={"center"}>
                    {/*Feedback Comment Form*/}
                    <Grid item container md={5}>
                        <FeedbackCommentForm feedbackId={feedbackId}/>
                    </Grid>
                    {/*Feedback Comment */}
                    {/*<Grid item className={classes.Label} md={1}>Comments</Grid>*/}
                    <Grid container item md={12} className={classes.CommentContainer} justify={"center"}>
                        <FeedbackCommentContainer feedbackId={feedbackId}/>
                    </Grid>
                </Grid>
            </Grid>
            //
            //     <div>
            //
            //     <div><span>feedback Title:</span><span>{feedbackDetails.title}</span></div>
            //     <div><span>app Name:</span><span>{feedbackDetails.appName}</span></div>
            //     <div><span>Type:</span><span>{feedbackDetails.type}</span></div>
            //     <div><span>feedback Description:</span><span>{feedbackDetails.feedbackDescription}</span></div>
            //
            //
            //     <div><span>status:</span><span>{feedbackDetails.status}</span></div>
            //     {/*Feedback Comment */}
            //     <FeedbackCommentContainer feedbackId={feedbackId}/>
            //     {/*Feedback Comment Form*/}
            //     <FeedbackCommentForm feedbackId={feedbackId}/>
            //
            //
            // </div>
        )

    }

}

ShowFeedback.contextType = UserTypeContext

export default withStyles(styles)(withRouter(ShowFeedback))