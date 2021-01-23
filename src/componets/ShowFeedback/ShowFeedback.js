import {useContext} from "react";
import UserTypeContext from "../../contextApi/UserTypeContext";
import { withRouter } from 'react-router-dom';
import FeedbackStatusForm from "./FeedbackStatusForm";

function ShowFeedback(props) {
    const userAuth = useContext(UserTypeContext);
    const userType = userAuth.userType;

    const feedbackDetails = props.location.state.feedbackDetails;
    const feedbackId = props.location.state.feedbackId;


    if (feedbackId === null) {
        return <div>Error 404</div>

    }

    if (userType === 'admin') {
        return (<div>

            <div><span>feedback Title:</span><span>{feedbackDetails.title}</span></div>
            <div><span>app Name:</span><span>{feedbackDetails.appName}</span></div>
            <div><span>Type:</span><span>{feedbackDetails.type}</span></div>
            <div><span>feedback Description:</span><span>{feedbackDetails.feedbackDescription}</span></div>
            <div><FeedbackStatusForm feedbackId={feedbackId} feedbackStatus={feedbackDetails.status}/></div>

        </div>)
    }

    return (<div>

        <div><span>feedback Title:</span><span>{feedbackDetails.title}</span></div>
        <div><span>app Name:</span><span>{feedbackDetails.appName}</span></div>
        <div><span>Type:</span><span>{feedbackDetails.type}</span></div>
        <div><span>feedback Description:</span><span>{feedbackDetails.feedbackDescription}</span></div>
        <div><span>status:</span><span>{feedbackDetails.status}</span></div>


    </div>)

}


export default withRouter(ShowFeedback)