import React from "react";
import FeedbackContext from "../../contextApi/FeedbackContext";
import {Link} from "react-router-dom";

class ShowButton extends React.Component {


    render() {
        return (

            <FeedbackContext.Consumer>
                {({updateSelectedFeedback}) => <>
                    <button onClick={() => updateSelectedFeedback(this.props.feedback)}><Link
                        to="/showFeedback">show</Link>
                    </button>
                </>}
            </FeedbackContext.Consumer>


        )
    }
}

export default ShowButton