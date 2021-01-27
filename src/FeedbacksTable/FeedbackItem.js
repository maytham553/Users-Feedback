import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";
import {Box, Button, Grid, Tooltip, Typography, withStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {grey, red} from "@material-ui/core/colors";
import VisibilityIcon from '@material-ui/icons/Visibility';
import BackupIcon from '@material-ui/icons/Backup';

const styles = theme => ({
    item: {
        backgroundColor: grey[100],
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '30px',
        borderRadius: '5px',
        textAlign: 'center',

    },
    deleteButton: {
        color: 'white',
        backgroundColor: red[500]
    },

    title: {
        color: grey[500],
        fontSize:'30px',
        marginRight: '10px',
        marginLeft: '8px'
    }
});

class FeedbackItem extends React.Component {
    db = firebase.firestore();


    deleteFeedback = () => {
        const feedbackId = this.props.feedback.id
        const onDelete = this.props.onDelete
        if (window.confirm('Are you sure you want to delete this feedback')) {
            this.db.collection("feedbacks").doc(feedbackId).delete().then(function () {
                onDelete(feedbackId);
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        }
    }


    render() {


        const feedbackId = this.props.feedback.id;
        const feedbackDetails = this.props.feedback;
        const {classes} = this.props;

        return (
            <Grid container item className={classes.item} spacing={2} md={2}>

                <Grid item container spacing={1} xs={12}>
                    <Typography variant="h6" >
                        <Box component={"span"} className={classes.title}>^^</Box>
                         {feedbackDetails.title}
                    </Typography>

                </Grid>

                {/*SHOW BUTTON */}
                <Grid item container spacing={2}>

                    <Grid item xs={4} md={12}>
                        <Tooltip title="show ">
                            <Button
                                variant={"contained"}
                                component={Link}
                                to={{
                                    pathname: '/showFeedback',
                                    state:
                                        {
                                            feedbackDetails: feedbackDetails,
                                            feedbackId: feedbackId
                                        }
                                }}
                                startIcon={<VisibilityIcon/>}
                            >
                                show
                            </Button>
                        </Tooltip>
                    </Grid>

                    {/*UPDATE BUTTON */}
                    <Grid item xs={4} md={12}>

                        <Tooltip title="Update">

                            <Button
                                variant={"contained"}
                                component={Link}
                                to={{
                                    pathname: './updateFeedback',
                                    state:
                                        {
                                            feedbackDetails: feedbackDetails,
                                            feedbackId: feedbackId
                                        }
                                }}
                                startIcon={<BackupIcon/>}
                            >
                                update
                            </Button>
                        </Tooltip>

                    </Grid>

                    {/*DELETE BUTTON */}
                    <Grid item xs={4} md={12}>
                        <Tooltip title="Delete">
                            <Button
                                variant={"contained"}
                                startIcon={<DeleteIcon/>}
                                className={classes.deleteButton}
                                onClick={this.deleteFeedback}
                            >
                                Delete
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>

            </Grid>

        )
    }

}

export default withStyles(styles)(FeedbackItem)