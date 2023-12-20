import React, {FC} from 'react';
import s from './Post.module.scss';

type T_Post = {
    message: string;
    likesCount: number
}

const Post: FC<T_Post> = (props) => {

    return (
        <div className={s.item}>
            <div>
                <img alt={'ava not found'}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU'/>
            {props.message}
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;