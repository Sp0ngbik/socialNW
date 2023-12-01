import React, {ChangeEvent} from 'react';

type T_ProfileStatus = {
    status: string,
    updateUserStatus: (status: string) => void

}

class ProfileStatus extends React.Component<T_ProfileStatus, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditModeHandler = () => {
        this.setState({editMode: true})
    }
    deactivateEditModeHandler = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }
    changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        const {status} = this.props
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input
                            onChange={this.changeStatusHandler}
                            value={this.state.status}
                            autoFocus={true}
                            onBlur={this.deactivateEditModeHandler}/>
                    </div> : <div>
                <span onDoubleClick={this.activateEditModeHandler}>
                    {status || 'No status'}
                </span>
                    </div>}

            </>
        );
    };
}

export default ProfileStatus;