import React, { FC, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './SelectItem.module.scss';
const cn = classNames.bind(styles);

interface ISelectItem {
    name: string;
    closeDropdown: (state: boolean) => void;
}

const SelectItem: FC<ISelectItem> = memo(({ name, closeDropdown }: ISelectItem): ReactElement => {
    const onClickHandler = () => {
        closeDropdown(false);
    };

    return (
        <li
            className={cn('select__item')}
            onClick={onClickHandler}
        >
            {name}
        </li>
    );
});

SelectItem.displayName = 'SelectItem';

export default SelectItem;