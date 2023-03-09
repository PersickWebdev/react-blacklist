import React, { FC, ReactElement, memo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Main, Footer } from './components/sections';
import { Modal } from './components/ui';
import { Requests } from './api';
import { setCompanies } from './storage/slices/companiesSlice';
import { setManagers } from './storage/slices/managersSlice';
import { setIndustries } from './storage/slices/industriesSlice';
import { setReasons } from './storage/slices/reasonsSlice';
import styles from './App.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface IApp {}

export const App: FC<IApp> = memo(({}: IApp): ReactElement => {
    const dispatch = useDispatch();
    const [ isModalActive, setIsModalActive ] = useState<boolean>(false);
    const [ errorMessage, setErrorMessage ] = useState<string>('');

    const fetchCompanies = async () => {
        const response = await Requests.companies.getAll();

        if (response.data.length) {
            dispatch(setCompanies(response.data));
        }

        if (response.status === 400 || response.status === 500) {
            setErrorMessage('Error. Try again later.');
            setIsModalActive(true);
        }
    };

    const fetchManagers = async () => {
        const response = await Requests.managers.getAll();

        if (response.data.length) {
            dispatch(setManagers(response.data));
        }

        if (response.status === 400 || response.status === 500) {
            setErrorMessage('Error. Try again later.');
            setIsModalActive(true);
        }
    };

    const fetchIndustries = async () => {
        const response = await Requests.industries.getAll();

        if (response.data.length) {
            dispatch(setIndustries(response.data));
        }

        if (response.status === 400 || response.status === 500) {
            setErrorMessage('Error. Try again later.');
            setIsModalActive(true);
        }
    };

    const fetchReasons = async () => {
        const response = await Requests.reasons.getAll();

        if (response.data.length) {
            dispatch(setReasons(response.data));
        }

        if (response.status === 400 || response.status === 500) {
            setErrorMessage('Error. Try again later.');
            setIsModalActive(true);
        }
    };

    useEffect(() => {
        fetchCompanies();
        fetchManagers();
        fetchIndustries();
        fetchReasons();
    }, []);

    return (
        <div className={cn('app')}>
            <Header/>
            <Main/>
            <Footer/>
            <Modal
                isModalActive={isModalActive}
                setIsModalActive={setIsModalActive}
                withCloseButton={true}
            >
                {errorMessage}
            </Modal>
        </div>
    );
});