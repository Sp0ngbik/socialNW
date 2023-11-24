import {addMessageAC, changeMessageTitleAC} from "../../redux/reducers/dialogReducer";
import {AppDispatch, RootState} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectHOC} from "../../hoc/AuthRedirectHOC";

const mapStateToProps = (state: RootState) => {
    return {
        dialogPage: state.dialogPage,
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

// const AuthRedirectHOC = (props: any) => {
//     const navigate = useNavigate()
//     useEffect(() => {
//         !props.isAuth && navigate('/login')
//     }, [props.isAuth, navigate]);
//     return <Dialogs {...props}/>
// }


const AuthRedirectHOC = withAuthRedirectHOC(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectHOC);