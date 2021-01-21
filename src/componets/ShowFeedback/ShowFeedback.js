import {useContext} from "react";
import FeedbackContext from "../../contextApi/FeedbackContext";
import UserTypeContext from "../../contextApi/UserTypeContext";
import FeedbackStatusForm from "./FeedbackStatusForm";

function ShowFeedback(props) {

    const feedback = useContext(FeedbackContext);
    const feedbackContent = feedback.selectedFeedback.feedbackContent;
    const feedbackId = feedback.selectedFeedback.feedbackId;
    const userAuth = useContext(UserTypeContext);
    const userType = userAuth.userType ;


    if (feedbackId === null) {
        return <div>Error 404</div>

    }

    if (userType === 'admin') {
        return (<div>

            <div><span>feedback Title:</span><span>{feedbackContent.title}</span></div>
            <div><span>app Name:</span><span>{feedbackContent.appName}</span></div>
            <div><span>Type:</span><span>{feedbackContent.type}</span></div>
            <div><span>feedback Description:</span><span>{feedbackContent.feedbackDescription}</span></div>
            <div><FeedbackStatusForm feedbackId={feedbackId} feedbackStatus={feedbackContent.status}/></div>

        </div>)
    }

    return (<div>

        <div><span>feedback Title:</span><span>{feedbackContent.title}</span></div>
        <div><span>app Name:</span><span>{feedbackContent.appName}</span></div>
        <div><span>Type:</span><span>{feedbackContent.type}</span></div>
        <div><span>feedback Description:</span><span>{feedbackContent.feedbackDescription}</span></div>
        <div><span>status:</span><span>{feedbackContent.status}</span></div>


    </div>)


}

export default ShowFeedback