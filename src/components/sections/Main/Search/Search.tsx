import React, { FC, ReactElement, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { InputSearch } from '../../../ui';
import { ISearchFormData } from '../../../../types/interfaces';
import styles from './Search.module.scss';
const cn = classNames.bind(styles);

interface ISearch {}

const Search: FC<ISearch> = memo(({}: ISearch): ReactElement => {
    const [ formData, setFormData ] = useState<ISearchFormData>({
        company: '',
    });

    console.log('Search - formData: ', formData);

    return (
        <div className={cn('search')}>
            <div className={cn('container')}>
                <InputSearch
                    id='search'
                    name='company'
                    placeholder='Enter company name'
                    setFormData={setFormData}
                />
            </div>
        </div>
    );
});

Search.displayName = 'Search';

export default Search;