import React, { FC, ReactElement, memo } from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface IFooter {}

const Footer: FC<IFooter> = memo(({}: IFooter): ReactElement => {
    return (
        <footer className={cn('footer')}>
            <div className={cn('container')}>
                <div className={cn('footer__copyrights')}>Copyrights</div>
            </div>
        </footer>
    );
});

export default Footer;