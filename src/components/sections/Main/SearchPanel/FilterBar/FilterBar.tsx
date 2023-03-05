import React, { FC, ReactElement, memo } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Icons } from '../../../../ui/Icons';
import { RootState } from '../../../../../storage/store';
import styles from './FilterBar.module.scss';
const cn = classNames.bind(styles);

interface IFilterBar {}

const FilterBar: FC<IFilterBar> = memo(({}: IFilterBar): ReactElement => {
    const { isAdmin } = useSelector((state: RootState) => state.admin);

    const addCompanyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('FilterBar - addCompanyHandler');
    };

    const openFilterHandler = () => {
        console.log('FilterBar - openFilterHandler');
    }

    return (
        <>
            {isAdmin
                ?
                <div className={cn('filter-bar', 'space-between')}>
                    <>
                        <span
                            className={cn('filter-bar__add')}
                            onClick={addCompanyHandler}
                        >
                            Add company
                        </span>
                        <div className={cn('filter-bar__icon-box')}>
                            {Icons.filter({
                                className: `${cn('filter-bar__icon')}`
                            })}
                        </div>
                    </>
                </div>
                :
                <div className={cn('filter-bar', 'flex-end')}>
                    <div
                        className={cn('filter-bar__icon-box')}
                        onClick={openFilterHandler}
                    >
                        {Icons.filter({
                            className: `${cn('filter-bar__icon')}`
                        })}
                    </div>
                </div>
            }
        </>
    );
});

export default FilterBar;