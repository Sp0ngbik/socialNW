import React, {FC, useState, useEffect} from 'react';
import style from './pagination.module.scss';

type T_PaginatorProps = {
    activePage: number;
    onPageChanged: (pageNumber: number) => void;
    totalUsersCount: number;
    step?: number
    visiblePages?: number
};


const Paginator: FC<T_PaginatorProps> = ({
                                             activePage,
                                             onPageChanged,
                                             totalUsersCount,
                                             step = 10,
                                             visiblePages = 10
                                         }) => {
    const [startPagination, setStartPagination] = useState(0);

    useEffect(() => {
        setStartPagination(Math.floor((activePage - 1) / visiblePages) * visiblePages);
    }, [activePage, visiblePages]);

    const totalCount = Math.ceil(totalUsersCount / visiblePages);
    let pages: number[] = [];
    for (let i = 1; i < totalCount + 1; i++) {
        pages.push(i);
    }

    return (
        <div className={style.paginationBlock}>
            <button disabled={startPagination <= 0} onClick={() => setStartPagination((prev) => prev - step)}>back
            </button>
            {pages.splice(startPagination, visiblePages).map(p => {
                return <div key={crypto.randomUUID()}>
                    <button
                        onClick={() => {
                            onPageChanged(p)
                        }}
                        className={activePage === p ? style.selectedPage : ''}
                    >
                        {p}</button>
                </div>
            })}
                <button disabled={visiblePages + startPagination >= totalCount} onClick={() => setStartPagination((prev) => prev + step)}>next</button>
        </div>
    );
};

export default Paginator;
