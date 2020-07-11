import * as types from "../constants/actionTypes";
import {addUser,messageReceived,populateUsersList} from "../actions";

const setupSocket = (dispatch,username) => {
    const socket = new WebSocket("ws://localhost:8989");

    socket.onOpen = () => {
        socket.send(JSON.stringify({
            type : types.ADD_USER,
            name: username
        }))
        console.log(username)
    }

    socket.onmessage = (event) => {
        console.log(event)
        const data = JSON.parse(event.data);
        switch (data.type){
            case types.ADD_MESSAGE:
                dispatch(messageReceived(data.message,"income"));
                break
            case types.ADD_USER:
                dispatch(addUser(data.name));
                break
            case types.USERS_LIST:
                dispatch(populateUsersList(data.users))
                break
            default:
                 break
        }
    }
    return socket
 }

 export default setupSocket;