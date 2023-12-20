import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from '../Profile.module.scss'

type T_ProfileStatus = {
    status: string,
    updateUserStatus: (status: string) => void

}

const ProfileStatusWithHooks: FC<T_ProfileStatus> = (props) => {
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
        <div className={s.statusBlock}>
            {editMode ?
                <div>
                    <input
                        onChange={changeStatusHandler}
                        value={status}
                        autoFocus={true}
                        onBlur={deactivateEditModeHandler}/>
                </div> : <div>
                <span onDoubleClick={activateEditModeHandler}>
                  Status: {status || 'No status'}
                </span>
                </div>}

        </div>
    );
};

export default ProfileStatusWithHooks;