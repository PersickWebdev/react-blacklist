import React, { FC, ReactElement, memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { SearchPanel } from './SearchPanel';
import { CompaniesList } from './CompaniesList';
import { RootState } from '../../../storage/store';
import { setCompanies, setFilteredCompanies } from '../../../storage/slices/companiesSlice';
import { Utils } from '../../../utils';
import styles from './Main.module.scss';
const cn = classNames.bind(styles);

interface IMain {}

const Main: FC<IMain> = memo(({}: IMain): ReactElement => {
    const dispatch = useDispatch();
    const [ searchOptions, setSearchOptions ] = useState({});
    const [ isSearchActive, setIsSearchActive ] = useState<boolean>(false);

    const { companies } = useSelector((state: RootState) => state.companies);

    useEffect(() => {
        if (isSearchActive) {
            // @ts-ignore
            dispatch(setFilteredCompanies(Utils.searchCompanies(companies, searchOptions)));
        } else {
            dispatch(setFilteredCompanies([]));
        }
    }, [isSearchActive]);

    return (
        <div className={cn('main')}>
            <SearchPanel
                setSearchOptions={setSearchOptions}
                isSearchActive={isSearchActive}
                setIsSearchActive={setIsSearchActive}
            />
            <CompaniesList companies={companies}/>
        </div>
    );
});

Main.displayName = 'Main';

export default Main;
