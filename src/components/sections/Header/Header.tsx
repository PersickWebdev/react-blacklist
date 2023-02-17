import React, { FC, ReactElement, memo, useState } from 'react';
import { Button, Modal } from '../../ui';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface IHeader {}

const Header: FC<IHeader> = memo(({}: IHeader): ReactElement => {
    const [ isModalActive, setIsModalActive ] = useState<boolean>(false);

    const signInHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsModalActive(true);
    };

    return (
        <header className={cn('header')}>
            <div className={cn('container')}>
                <h1 className={cn('header__title')}>Blacklist</h1>
                <div className={cn('header__auth-box')}>
                    <Button
                        buttonType='primary-default'
                        action={signInHandler}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
            <Modal
                heading='Test Modal Heading'
                withCloseButton={true}
                isModalActive={isModalActive}
                setIsModalActive={setIsModalActive}
            >
                <div>
                    <p>
                        Test modal window text content.
                    </p>
                </div>
            </Modal>
        </header>
    );
});

export default Header;