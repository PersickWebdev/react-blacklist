import React, { FC, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
const cn = classNames.bind(styles);

interface IFilter {
    isFilterOpened: boolean;
    setIsFilterOpened: (state: boolean) => void;
}

const Filter: FC<IFilter> = memo(({
    isFilterOpened,
    setIsFilterOpened,
}: IFilter): ReactElement => {
    return (
        <div className={cn('filter', { 'is-opened': isFilterOpened })}>
            Filter
        </div>
    );
});

Filter.displayName = 'Filter';

export default Filter;