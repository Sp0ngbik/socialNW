import React from 'react';
import {T_Message} from "../../../index";

const Message = (props: T_Message) => {
    return <div>{props.message}</div>
}

export default Message;