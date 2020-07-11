import * as types from "../constants/actionTypes";

let initialstate = [
    {
        message: "hi there",
        author: "income",
        id: 1
    },
    {
        message: "hello",
        author: "out_going",
        id: 2
    }
]
const messages = (state = initialstate, action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: Math.floor(Math.random() * (100000))
                }])
        case types.EDIT_MESSAGE:
            return state.map((eachMessage) => {
                if(eachMessage.id === action.id){
                    eachMessage.message = action.message
                }
                return eachMessage;
            })
        default:
            return state;
    }
}

export default messages;