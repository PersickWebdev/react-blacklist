import React, { FC, ReactElement, CSSProperties, memo, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { SelectItem } from './SelectItem';
import { Icons } from '../Icons';
import { useClickOutside } from '../../../hooks';
import styles from './Select.module.scss';
const cn = classNames.bind(styles);

interface ISelect {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    dropdownItems: any;
    containerStyles?: CSSProperties;
}

const Select: FC<ISelect> = memo(({
    id,
    name,
    label,
    placeholder,
    dropdownItems,
    containerStyles,
}: ISelect): ReactElement => {
    const [ inputValue, setInputValue ] = useState<string>('');
    const [ isDropdownOpened, setIsDropdownOpened ] = useState<boolean>(false);

    const selectRef = useRef<HTMLDivElement>(null);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const dropdownHandler = () => {
        setIsDropdownOpened(!isDropdownOpened);
    };

    const closeDropdown = () => {
        setIsDropdownOpened(false);
    };

    const dropdownElements = dropdownItems.map((item: any) => {
        return (
            <SelectItem
                key={item.id}
                name={item.name}
                closeDropdown={closeDropdown}
            />
        )
    });

    useClickOutside(selectRef, closeDropdown);

    return (
        <div
            className={cn('select')}
            style={containerStyles ? containerStyles : {}}
            ref={selectRef}
            onClick={dropdownHandler}
        >
            <label
                className={cn('select__label')}
                htmlFor={id}
            >
                {label && <span className={cn('select__label-text')}>{label}</span>}

                <input
                    className={cn('select__element')}
                    type='text'
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={inputValue ?? ''}
                    onChange={onChangeHandler}
                    readOnly={true}
                />

                {Icons.chevronUp({
                    className: `${cn('select__chevron', { 'rotated': isDropdownOpened })}`
                })}

                <ul className={cn('select__dropdown', { 'is-opened': isDropdownOpened })}>
                    {dropdownElements}
                </ul>
            </label>
        </div>
    );
});

Select.displayName = 'Select';

export default Select;