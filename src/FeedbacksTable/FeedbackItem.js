import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";
import {Button, Card, Grid, Tooltip, Typography, withStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {grey, red} from "@material-ui/core/colors";
import VisibilityIcon from '@material-ui/icons/Visibility';
import BackupIcon from '@material-ui/icons/Backup';

const styles = theme => ({
    item: {
        backgroundColor: grey[100],
        borderRadius: '5px',
        padding : 10 ,
    },
    deleteButton: {
        color: 'white',
        backgroundColor: red[500]
    },

    titleLabel: {
        borderRadius: '4px',
        color: grey[600],
        backgroundColor: grey[200],
        marginRight: '10px',
        marginLeft: '8px',
        padding: '5px',
        fontSize: '15px'
    },
    title: {
        marginBottom: '10px',
    },
    description:{
        color:grey[500],
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
        const description = feedbackDetails.feedbackDescription.slice(0, 40) + (feedbackDetails.feedbackDescription.length > 40? " ..." : "")

        return (
            <Card style={{ marginBottom : 16 , width : '100%'}}>
                <Grid container item className={classes.item}  md={12} >

                    <Grid item container spacing={1} xs={12} className={classes.title} direction={'column'} >
                        <Grid item>
                            <Typography variant="h6">
                                {feedbackDetails.title}
                            </Typography>
                        </Grid>

                        <Grid item  className={classes.description}>
                            <Typography variant="subtitle1">
                                {description}
                            </Typography>

                        </Grid>

                    </Grid>

                    {/*SHOW BUTTON */}
                    <Grid item container spacing={2} justify={"center"} >

                        <Grid item container md={4} justify={"center"}>
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
                        <Grid item container md={4} justify={"center"} >

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
                        <Grid item  container md={4} justify={"center"}>
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

            </Card>

        )
    }

}

export default withStyles(styles)(FeedbackItem)