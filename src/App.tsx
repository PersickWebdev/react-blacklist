import React from 'react';
import { Header, Footer } from './components/sections';
import styles from './App.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export const App = () => {
    return (
        <div className={cn('app')}>
            <Header/>
            <div className={cn('app__main')}>
                Main
            </div>
            <Footer/>
        </div>
    );
};