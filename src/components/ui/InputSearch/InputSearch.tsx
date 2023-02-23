import React, { FC, ReactElement, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { ISearchFormData } from '../../../types/interfaces';
import styles from './InputSearch.module.scss';
const cn = classNames.bind(styles);

interface IInputSearch {
    id: string;
    name: string;
    placeholder: string;
    setFormData: (state: any) => void;
}

const InputSearch: FC<IInputSearch> = memo(({
    id,
    name,
    placeholder,
    setFormData,
}: IInputSearch): ReactElement => {
    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        setFormData((state: ISearchFormData) => {
            return {
                ...state,
                [name]: event.target.value,
            }
        });
    };

    return (
        <div className={cn('input-search')}>
            <label
                className={cn('input-search__label')}
                htmlFor={id}
            >
                <input
                    className={cn('input-search__element')}
                    type='text'
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={inputValue ?? ''}
                    onChange={onChangeHandler}
                />
            </label>
        </div>
    );
});

InputSearch.displayName = 'InputSearch';

export default InputSearch;