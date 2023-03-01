import React, { FC, ReactElement, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { SearchPanel } from './SearchPanel';
import { CompaniesList } from './CompaniesList';
import styles from './Main.module.scss';
const cn = classNames.bind(styles);

interface IMain {}

const Main: FC<IMain> = memo(({}: IMain): ReactElement => {
    const [ searchOptions, setSearchOptions ] = useState({});
    const [ isSearchActive, setIsSearchActive ] = useState<boolean>(false);

    console.log('Main - searchOptions: ', searchOptions);
    console.log('Main - isSearchActive: ', isSearchActive);

    return (
        <div className={cn('main')}>
            <SearchPanel
                setSearchOptions={setSearchOptions}
                isSearchActive={isSearchActive}
                setIsSearchActive={setIsSearchActive}
            />
            <CompaniesList/>
        </div>
    );
});

Main.displayName = 'Main';

export default Main;
