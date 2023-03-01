import React, { FC, ReactElement, memo } from 'react';
import { Search } from '../../../ui';
import { StateKeys } from './SearchPanel.data';
import classNames from 'classnames/bind';
import styles from './SearchPanel.module.scss';
const cn = classNames.bind(styles);

interface ISearch {
    setSearchOptions: (state: {}) => void;
    isSearchActive: boolean;
    setIsSearchActive: (state: boolean) => void;
}

const SearchPanel: FC<ISearch> = memo(({ setSearchOptions, isSearchActive, setIsSearchActive }: ISearch): ReactElement => {

    return (
        <div className={cn('search')}>
            <div className={cn('container')}>
                <Search
                    id='search'
                    name='name'
                    placeholder='Search by company name, email or key person'
                    stateKeys={StateKeys}
                    setSearchOptions={setSearchOptions}
                    isSearchActive={isSearchActive}
                    setIsSearchActive={setIsSearchActive}
                />
            </div>
        </div>
    );
});

SearchPanel.displayName = 'SearchPanel';

export default SearchPanel;