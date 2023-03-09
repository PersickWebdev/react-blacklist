import React, {FC, ReactElement, memo, CSSProperties} from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { Button, Select } from '../../../../../ui';
import { RootState } from '../../../../../../storage/store';
import styles from './Filter.module.scss';
const cn = classNames.bind(styles);

interface IFilter {
    isFilterOpened: boolean;
    setIsFilterOpened: (state: boolean) => void;
    containerStyles?: CSSProperties;
}

const ContainerStyles = {
    select: {
        maxWidth: '300px',
        width: '100%',
    }
}

const Filter: FC<IFilter> = memo(({
    isFilterOpened,
    setIsFilterOpened,
    containerStyles,
}: IFilter): ReactElement => {
    const { reasons } = useSelector((state: RootState) => state.reasons);
    const { industries } = useSelector((state: RootState) => state.industries);

    return (
        <div
            className={cn('filter', { 'is-opened': isFilterOpened })}
            style={containerStyles ? containerStyles : {}}
        >
            <form className={cn('filter__form')}>
                <Select
                    id='select-industry'
                    name='industry'
                    label='Industry:'
                    placeholder='Select industry'
                    dropdownItems={industries}
                    containerStyles={ContainerStyles.select}
                />
            </form>
            <div className={cn('filter__actions')}>
                <Button
                    buttonType='secondary-default'
                >
                    Clear
                </Button>
                <Button
                    buttonType='primary-success'
                >
                    Save
                </Button>
            </div>
        </div>
    );
});

Filter.displayName = 'Filter';

export default Filter;