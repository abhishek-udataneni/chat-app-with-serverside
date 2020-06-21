import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";
const MessagesList = ({messages}) => {
    return (
        <section id="messages-list">
            <ul>
                {messages.map(message => (
                    <Message key={message.id} {...message}/>
                ))}
            </ul>
        </section>
    );
}

// MessagesList.PropTypes = {
//     message: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         message: PropTypes.string.isRequired,
//         message: PropTypes.string.isRequired,
//     }).isRequired).isRequired
// }
export default MessagesList;