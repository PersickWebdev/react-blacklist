import React, { FC, CSSProperties, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './CompaniesList.module.scss';
const cn = classNames.bind(styles);

interface ICompaniesList {}

const CompaniesList: FC<ICompaniesList> = memo(({}: ICompaniesList):ReactElement => {
    return (
        <div className={cn('companies-list')}>

        </div>
    );
});

export default CompaniesList;