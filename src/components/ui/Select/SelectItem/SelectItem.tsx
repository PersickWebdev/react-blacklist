import React, { FC, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './SelectItem.module.scss';
const cn = classNames.bind(styles);

interface ISelectItem {
    name: string;
    label: string;
    setInputValue: (state: string) => void;
    setFormData: (state: any) => void;
    closeDropdown: () => void;
}

const SelectItem: FC<ISelectItem> = memo(({
    name,
    label,
    setInputValue,
    setFormData,
    closeDropdown,
}: ISelectItem): ReactElement => {

    const onClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        event.stopPropagation();

        setInputValue(label);
        closeDropdown();
        setFormData((state: any) => {
            return {
                ...state,
                [name]: label,
            }
        });
    };

    return (
        <li
            className={cn('select__item')}
            onClick={onClickHandler}
        >
            {label}
        </li>
    );
});

SelectItem.displayName = 'SelectItem';

export default SelectItem;