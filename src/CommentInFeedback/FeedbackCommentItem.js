import React from "react";
import {Grid, Typography, withStyles} from "@material-ui/core";
import firebase from "./../Config/FirebaseConfig";
import {blue, grey} from "@material-ui/core/colors";


const styles = theme => ({
    commentBlue: {
        backgroundColor: blue[100],
        marginTop: '10px',
        textAlign: 'right',
        padding: '10px',
        marginRight: '150px',
        borderRadius: '5px'


    },
    commentGrey: {
        backgroundColor: grey[100],
        marginTop: '10px',
        textAlign: 'left',
        padding: '10px',
        marginLeft: '150px',
        borderRadius: '5px'
    },


});

class FeedbackCommentItem extends React.Component {


    render() {
        const uid = firebase.auth().currentUser.uid
        const {classes} = this.props
        if (this.props.comment.uid === uid)
            return (
                <Grid item container md={7} justify={"flex-end"}>
                    <Grid item md={5} className={classes.commentBlue}>
                        <Typography>
                            {this.props.comment.commentBody}
                        </Typography>
                    </Grid>
                </Grid>
            );

        return (
            <Grid item container md={7} justify={"flex-start"}>
                <Grid item md={5} className={classes.commentGrey}>
                    <Typography>
                        {this.props.comment.commentBody}
                    </Typography>
                </Grid>
            </Grid>
        )
    }

}

export default withStyles(styles)(FeedbackCommentItem)