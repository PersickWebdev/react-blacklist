import React, { FC, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import { Search } from './Search';
import { CompaniesList } from './CompaniesList';
import styles from './Main.module.scss';
const cn = classNames.bind(styles);

interface IMain {}

const Main: FC<IMain> = memo(({}: IMain): ReactElement => {
    return (
        <div className={cn('main')}>
            <Search/>
            <CompaniesList/>
        </div>
    );
});

Main.displayName = 'Main';

export default Main;
