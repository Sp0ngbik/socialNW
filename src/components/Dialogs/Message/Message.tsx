import React from 'react';
import {T_Message} from "../../../redux/reducers/dialogReducer";

const Message = (props: T_Message) => {
    return <div>{props.message}</div>
}

export default Message;