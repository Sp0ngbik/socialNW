import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootState} from "../redux/reduxStore";

const mapStateRedirectProps = (state: RootState) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}


export const withAuthRedirectHOC = <T, >(Component: ComponentType<T>) => {
    class RedirectComponent extends React.Component <{ isAuth: boolean }> {
        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return <Navigate to={'/login'}/>
            return <Component {...restProps as T & {}}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateRedirectProps)(RedirectComponent)

    return ConnectedRedirectComponent
}

// export function withAuthRedirectHOC<T>(Component: ComponentType<T>) {
//     const RedirectComponent = (props: { isAuth: boolean }) => {
//         let {isAuth, ...restProps} = props
//         if (!isAuth) return <Navigate to={'/login'}/>
//         return <Component {...restProps as T & {}}/>
//     }
//     let ConnectedRedirectComponent = connect(mapStateRedirectProps)(RedirectComponent)
//
//     return ConnectedRedirectComponent
// }