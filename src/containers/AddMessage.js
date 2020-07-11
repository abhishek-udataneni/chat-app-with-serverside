import {connect} from "react-redux";
import AddMessageComponent from "../components/AddMessage";
import { addMessage } from "../actions";

export const mapDispatchToProps = dispatch=> ({
    addMessage: (message,author) => {
        dispatch(addMessage(message, author))
    }
})

export const AddMessage = connect(()=>({}),mapDispatchToProps)(AddMessageComponent);