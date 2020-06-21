import React from "react";
import propTypes from "prop-types";

const Message = ({message,author}) => {
    return (
    <div>
            {author}: {message}
        </div>
    );
}

// Message.PropTypes = {
//     message: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired
// }
export default Message;