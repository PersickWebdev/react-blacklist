import React, { FC, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cn = classNames.bind(styles);

interface ISearch {}

const Search: FC<ISearch> = memo(({}: ISearch): ReactElement => {
    return (
        <div className={cn('search')}>
            <div className={cn('container')}>
                Search
            </div>
        </div>
    );
});

Search.displayName = 'Search';

export default Search;