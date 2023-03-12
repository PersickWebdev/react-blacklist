import React, { FC, ReactElement, CSSProperties, memo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';
const cn = classNames.bind(styles);

interface ICheckbox {
    id: string;
    name: string;
    label: string;
    isChecked: boolean,
    setFormData: (state: any) => void;
    reversedElements?: boolean;
    containerStyles?: CSSProperties;
}

const Checkbox: FC<ICheckbox> = memo(({
    id,
    name,
    label,
    isChecked,
    setFormData,
    reversedElements,
    containerStyles,
}: ICheckbox): ReactElement => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setFormData((state: any) => {
                return {
                    ...state,
                    [event.target.name]: [...state[event.target.name], label],
                }
            });
        } else {
            setFormData((state: any) => {
                return {
                    ...state,
                    [event.target.name]: [...state[event.target.name].filter((item: string) => item !== label)],
                }
            })
        }
    };

    return (
        <div
            className={cn('checkbox')}
            style={containerStyles ? containerStyles : {}}
        >
            <label
                className={cn('checkbox__label', { 'is-reversed': reversedElements })}
                htmlFor={id}
            >
                <span className={cn('checkbox__label-text')}>{label}</span>
                <input
                    className={cn('checkbox__element')}
                    type='checkbox'
                    id={id}
                    name={name}
                    checked={isChecked}
                    onChange={onChangeHandler}
                />
                <div className={cn('checkbox__checkmark')}/>
            </label>
        </div>
    );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;