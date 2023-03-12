import React, { FC, ReactElement, CSSProperties, memo, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { Icons } from '../Icons';
import { useClickOutside } from '../../../hooks';
import styles from './SelectMultiple.module.scss';
const cn = classNames.bind(styles);

interface ISelectMultiple {
    id: string;
    name: string;
    label: string;
    value: Array<string>;
    placeholder: string;
    containerStyles?: CSSProperties;
}

const SelectMultiple: FC<ISelectMultiple> = memo(({
    id,
    name,
    label,
    value,
    placeholder,
    containerStyles,
}: ISelectMultiple): ReactElement => {
    const [ inputValue, setInputValue ] = useState<Array<string>>([]);
    const [ isDropdownOpened, setIsDropdownOpened ] = useState<boolean>(false);

    const selectRef = useRef<HTMLDivElement>(null);

    const dropdownHandler = () => {
        setIsDropdownOpened(!isDropdownOpened);
    };

    const closeDropdown = () => {
        setIsDropdownOpened(false);
    };

    // Todo: dropdownElements

    useClickOutside(selectRef, closeDropdown);

    return (
        <div
            className={cn('select-multiple')}
            style={containerStyles ? containerStyles : {}}
            ref={selectRef}
        >
            <label
                className={cn('select-multiple__label')}
                htmlFor={id}
            >
                <span className={cn('select-multiple__label-text')}>{label}</span>
                <input
                    className={cn('select-multiple__element')}
                    type='text'
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value ?? inputValue}
                    onClick={dropdownHandler}
                    readOnly={true}
                />

                {Icons.chevronUp({
                    className: `${cn('select__chevron', { 'rotated': isDropdownOpened })}`
                })}

                <ul className={cn('select__dropdown', { 'is-opened': isDropdownOpened })}>
                    {/*Todo: dropdownElements*/}
                </ul>
            </label>
        </div>
    );
});

SelectMultiple.displayName = 'SelectMultiple';

export default SelectMultiple;