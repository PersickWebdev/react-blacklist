import React, { memo, useState, FC, ReactElement, CSSProperties} from 'react';
import classNames from 'classnames/bind';
import { Icons, IIcons } from '../Icons';
import { ISearchFormData } from '../../../types/interfaces';
import styles from './InputSearch.module.scss';
const cn = classNames.bind(styles);

interface IInputSearch {
    id: string;
    name: string;
    placeholder: string;
    setFormData: (state: any) => void;
    onSubmitHandler: (state: any) => void;
    containerDimensions?: CSSProperties;
}

const InputSearch: FC<IInputSearch> = memo(({
    id,
    name,
    placeholder,
    setFormData,
    containerDimensions,
    onSubmitHandler,
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
        <div
            className={cn('input-search')}
            style={containerDimensions ? containerDimensions : {}}
        >
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

                <div
                    className={cn('input-search__icon-box')}
                    onClick={onSubmitHandler}
                >
                    {Icons.search({
                        className: `${cn('input-search__icon')}`
                    })}
                </div>

            </label>
        </div>
    );
});

InputSearch.displayName = 'InputSearch';

export default InputSearch;