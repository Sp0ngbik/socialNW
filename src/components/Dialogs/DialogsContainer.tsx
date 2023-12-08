import {addMessageAC,} from "../../redux/reducers/dialogReducer";
import {AppDispatch, RootState} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {withAuthRedirectHOC} from "../../hoc/AuthRedirectHOC";

const mapStateToProps = (state: RootState) => {
    return {
        dialogPage: state.dialogPage,
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addMessageHandler: (newMessageTitle: string) => {
            dispatch(addMessageAC(newMessageTitle))
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectHOC,
)(Dialogs)