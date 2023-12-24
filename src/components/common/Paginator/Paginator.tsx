import React, {FC} from 'react';
import style from "../../Users/users.module.css";

type T_PaginatorProps = {
    activePage: number,
    onPageChanged: (pageNumber: number) => void
}

const Paginator: FC<T_PaginatorProps> = ({activePage, onPageChanged}) => {

    let pages: number[] = []
    for (let i = 1; i < 10; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <button key={crypto.randomUUID()}
                           onClick={() => onPageChanged(p)}
                           className={activePage === p ? style.selectedPage : ''}>
                {p}</button>
        })}
    </div>
};

export default Paginator;