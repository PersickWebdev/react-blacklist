import React, { FC, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './InputSearch.module.scss';
const cn = classNames.bind(styles);

interface IInputSearch {}

const InputSearch: FC<IInputSearch> = memo(({}: IInputSearch): ReactElement => {
    return (
        <div className={cn('input-search')}>

        </div>
    );
});

export default InputSearch;