import React from 'react';

import styles from './App.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export const App = () => {
    return (
        <div className={cn('app')}>
            Application
        </div>
    );
};