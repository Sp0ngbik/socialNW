import React, {FC} from 'react';
import {T_UsersContainerProps} from "./UsersContainer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type T_UsersProps = {
    onPageChanged: (pageNumber: number) => void
    followHandler: (userId: number) => void
    unFollowHandler: (userId: number) => void
}

export const Users: FC<T_UsersProps & T_UsersContainerProps> = ({
                                                                    usersPage,
                                                                    activePage,
                                                                    onPageChanged,
                                                                    followHandler,
                                                                    unFollowHandler,
                                                                }) => {
    return (
        <div>
            <Paginator activePage={activePage} onPageChanged={onPageChanged}/>
            {usersPage.map(user =>
                <User key={user.id} userBody={user} followHandler={followHandler} unFollowHandler={unFollowHandler}/>)}
        </div>
    );
};

export default Users;