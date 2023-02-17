import React, { FC, CSSProperties, ReactNode, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import {Button} from "../Button";
const cn = classNames.bind(styles);

interface IModal {
    isModalActive: boolean;
    setIsModalActive: (state: boolean) => void;
    children?: ReactNode | ReactNode[];
    heading?: string;
    withCloseButton?: boolean;
    customContainerStyles?: CSSProperties;
}

const Modal: FC<IModal> = memo(({
    children,
    isModalActive,
    setIsModalActive,
    customContainerStyles,
    heading,
    withCloseButton,
}: IModal): ReactElement => {

    const closeModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsModalActive(false);
    };

    return (
        <div
            className={cn('modal', { 'is-active': isModalActive })}
            style={customContainerStyles ? customContainerStyles : {}}
        >
            <div className={cn('modal__content')}>
                {heading
                    ?
                    <h2 className={cn('modal__heading')}>{heading}</h2>
                    :
                    <></>
                }
                <div className={cn('modal__children-box')}>
                    {children}
                </div>
                {withCloseButton
                    ?
                    <div className={cn('modal__actions')}>
                        <Button
                            buttonType='secondary-error'
                            action={closeModalHandler}
                        >
                            Close
                        </Button>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    );
});

export default Modal;