import {connect} from "react-redux";
import EditDialogComponent from "../components/EditDialog";
import { editMessage } from "../actions";

export const mapDispatchToProps = dispatch=> ({
    editMessage: (message,id) => {
        dispatch(editMessage(message, id))
    }
})

export const EditDialog = connect(()=>({}),mapDispatchToProps)(EditDialogComponent);