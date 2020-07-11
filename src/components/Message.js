import React, { useState, useEffect }  from "react";
import MessageUi from './MessageUi';

const Message = React.memo(({message,author, id}) => {
    const [currentTime,setCurrentTime] = useState(null);

    const getCurrentTime = () => {
        const time = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });
        return time;
      };

    useEffect(() => {
        setCurrentTime(getCurrentTime());
    }, []);
    console.log(id)
    return (
        <>
            <MessageUi currentTime={currentTime} id={id} author={author} question={message} />   
        </>
    );
})

// Message.PropTypes = {
//     message: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired
// }
export default (Message);