import React, { FC, ReactElement, CSSProperties, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { Checkbox } from '../../Checkbox';
import styles from './SelectMultipleItem.module.scss';
const cn = classNames.bind(styles);

interface ISelectMultipleItem {
    id: string;
    name: string;
    label: string;
    formData: any;
    setFormData: (state: any) => void;
    reversedElements: boolean;
}

const SelectMultipleItem: FC<ISelectMultipleItem> = memo(({
    id,
    name,
    label,
    formData,
    setFormData,
    reversedElements,
}: ISelectMultipleItem): ReactElement => {
    return (
        <li className={cn('select-multiple__item')}>
            <Checkbox
                id={id}
                name={name}
                label={label}
                isChecked={formData[name].some((item: string) => item === label)}
                reversedElements={reversedElements}
                setFormData={setFormData}
            />
        </li>
    );
});

SelectMultipleItem.displayName = 'SelectMultipleItem';

export default SelectMultipleItem;