import {connect} from "react-redux";
import Navbar from "./Navbar";
import {RootState} from "../../redux/reduxStore";

const mapStateToProps = (state: RootState) => {
    return {
        friends: state.sidebar.friends,
        isAuth: state.authReducer.isAuth
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)