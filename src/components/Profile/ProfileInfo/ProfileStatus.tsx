import React from 'react';

type T_ProfileStatus = {
    status: string
}

class ProfileStatus extends React.Component<T_ProfileStatus, any> {
    state = {
        editMode: false
    }

    activateEditModeHandler = () => {
        this.setState({editMode: true})
    }
    deactivateEditModeHandler = () => {
        this.setState({editMode: false})
    }

    render() {
        const {status} = this.props
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input value={status} autoFocus={true} onBlur={this.deactivateEditModeHandler}/>
                    </div> : <div>
                <span onDoubleClick={this.activateEditModeHandler}>
                    {status}
                </span>
                    </div>}

            </>
        );
    };
}

export default ProfileStatus;