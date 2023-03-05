import React, { FC, ReactElement, CSSProperties, memo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Icons } from '../Icons';
import styles from './Search.module.scss';
const cn = classNames.bind(styles);

interface ISearch {
    id: string;
    name: string;
    placeholder: string;
    stateKeys: Array<string>;
    setSearchOptions: (state: {}) => void;
    isSearchActive: boolean;
    setIsSearchActive: (state: boolean) => void;
    containerStyles?: CSSProperties
}

const Search: FC<ISearch> = memo(({
    id,
    name,
    placeholder,
    stateKeys,
    setSearchOptions,
    isSearchActive,
    setIsSearchActive,
    containerStyles,
}: ISearch): ReactElement => {
    const [ inputValue, setInputValue ] = useState<string>('');

    const setSearchOptionsObject = () => {
        setSearchOptions((state: {}) => {
            let resultObject = {};

            stateKeys.forEach((key: string) => {
                if (inputValue !== '') {
                    // @ts-ignore
                    resultObject[key] = inputValue;
                    setIsSearchActive(true);
                } else {
                    resultObject = {};
                    setIsSearchActive(false);
                }
            });

            return {
                ...state,
                ...resultObject,
            }
        });
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onClickHandler = () => {
        setSearchOptionsObject();
    };

    const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearchOptionsObject();
        }
    };

    const clearValueHandler = () => {
        setInputValue('');
    }

    useEffect(() => {
        !isSearchActive && setInputValue('');
    }, [isSearchActive]);

    return (
        <div className={cn('input-search')} style={containerStyles ? containerStyles : {}}>
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
                    onKeyUp={onKeyUpHandler}
                />

                {inputValue !== ''
                    ?
                    <p className={cn('input-search__clear-value')} onClick={clearValueHandler}>x</p>
                    :
                    <></>
                }

                <div
                    className={cn('input-search__icon-box')}
                    onClick={onClickHandler}
                >
                    {Icons.search({
                        className: `${cn('input-search__icon')}`
                    })}
                </div>

            </label>
        </div>
    );
});

Search.displayName = 'Search';

export default Search;