import {connect} from "react-redux";
import SidebarListComponent from "../components/Sidebar";



export const Sidebar = connect((state)=>({
    users: state.users
}),{})(SidebarListComponent);