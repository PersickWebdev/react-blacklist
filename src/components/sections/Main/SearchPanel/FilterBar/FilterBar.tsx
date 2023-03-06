import React, { FC, ReactElement, memo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Filter } from './Filter';
import { Icons } from '../../../../ui/Icons';
import { RootState } from '../../../../../storage/store';
import styles from './FilterBar.module.scss';
const cn = classNames.bind(styles);

interface IFilterBar {}

const FilterBar: FC<IFilterBar> = memo(({}: IFilterBar): ReactElement => {
    const { isAdmin } = useSelector((state: RootState) => state.admin);
    const [ isFilterOpened, setIsFilterOpened ] = useState<boolean>(false);

    const addCompanyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('FilterBar - addCompanyHandler');
    };

    const openFilterHandler = () => {
        setIsFilterOpened(!isFilterOpened);
    };

    useEffect(() => {
        setIsFilterOpened(false);
    }, []);

    return (
        <div className={cn('filter-bar')}>
            {isAdmin
                ?
                <div className={cn('filter-bar__content', 'space-between')}>
                    <span
                        className={cn('filter-bar__add')}
                        onClick={addCompanyHandler}
                    >
                            Add company
                        </span>
                    <div
                        className={cn('filter-bar__icon-box')}
                        onClick={openFilterHandler}
                    >
                        {Icons.filter({
                            className: `${cn('filter-bar__icon')}`
                        })}
                    </div>
                </div>
                :
                <div className={cn('filter-bar__content', 'flex-end')}>
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
            <Filter
                isFilterOpened={isFilterOpened}
                setIsFilterOpened={setIsFilterOpened}
            />
        </div>
    );
});

export default FilterBar;