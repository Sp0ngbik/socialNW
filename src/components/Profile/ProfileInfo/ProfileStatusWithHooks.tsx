import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type T_ProfileStatus = {
    status: string,
    updateUserStatus: (status: string) => void

}

const ProfileStatusWithHooks:FC<T_ProfileStatus> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const activateEditModeHandler = () => {
        setEditMode(true)
    }
    const deactivateEditModeHandler = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {editMode ?
                <div>
                    <input
                        onChange={changeStatusHandler}
                        value={status}
                        autoFocus={true}
                        onBlur={deactivateEditModeHandler}/>
                </div> : <div>
                <span onDoubleClick={activateEditModeHandler}>
                    {status || 'No status'}
                </span>
                </div>}

        </>
    );
};

export default ProfileStatusWithHooks;