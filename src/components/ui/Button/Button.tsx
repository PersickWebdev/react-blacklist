// PROPERTIES:
// 'buttonType':
//  - 'primary-default'
//  - 'primary-success'
//  - 'primary-warning'
//  - 'primary-error'
//  - 'secondary-default'
//  - 'secondary-success'
//  - 'secondary-warning'
//  - 'secondary-error'

import React, { FC, ReactElement, ReactNode, CSSProperties, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cn = classNames.bind(styles);

interface IButton {
    buttonType: string;
    action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customStyles?: CSSProperties;
    children?: ReactNode | ReactNode[];
}

const Button: FC<IButton> = memo(({ children, buttonType, customStyles, action }: IButton): ReactElement => {
    return (
        <button
            className={cn('button', `${buttonType}`)}
            style={customStyles ? customStyles : {}}
            onClick={action}
        >
            {children}
        </button>
    );
});

export default Button;