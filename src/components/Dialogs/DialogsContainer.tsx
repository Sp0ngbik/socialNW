import {addMessageAC, changeMessageTitleAC} from "../../redux/reducers/dialogReducer";
import {AppDispatch, RootState} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: RootState) => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addMessageHandler: () => {
            dispatch(addMessageAC())
        },
        onChangeDialogHandler: (text: string) => {
            dispatch(changeMessageTitleAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);