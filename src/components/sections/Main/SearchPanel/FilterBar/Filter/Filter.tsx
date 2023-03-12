import React, { FC, ReactElement, CSSProperties, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Button, Select, Checkbox } from '../../../../../ui';
import { RootState } from '../../../../../../storage/store';
import { IFilterFormData } from './Filter.types';
import styles from './Filter.module.scss';
const cn = classNames.bind(styles);

interface IFilter {
    isFilterOpened: boolean;
    setIsFilterOpened: (state: boolean) => void;
    containerStyles?: CSSProperties;
}

const ContainerStyles = {
    select: {
        maxWidth: '304px',
        width: '100%',
        marginBottom: '24px',
    }
}

const Filter: FC<IFilter> = memo(({
    isFilterOpened,
    setIsFilterOpened,
    containerStyles,
}: IFilter): ReactElement => {
    const { reasons } = useSelector((state: RootState) => state.reasons);
    const { industries } = useSelector((state: RootState) => state.industries);
    const [ formData, setFormData ] = useState<IFilterFormData>({
        industry: '',
        reason: '',
        reasons: [],
    });

    const clearFilterFormData = () => {
        setFormData((state: IFilterFormData) => {
            return {
                ...state,
                industry: '',
                reason: '',
                reasons: []
            }
        })
    };

    console.log('Filter - formData: ', formData);

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
                    value={formData.industry}
                    dropdownItems={industries}
                    setFormData={setFormData}
                    containerStyles={ContainerStyles.select}
                />
                <Select
                    id='select-reason'
                    name='reason'
                    label='Reason:'
                    placeholder='Select reason'
                    value={formData.reason}
                    dropdownItems={reasons}
                    setFormData={setFormData}
                    containerStyles={ContainerStyles.select}
                />
                <Checkbox
                    id='select-reasons-01'
                    name='reasons'
                    label='Item #01'
                    isChecked={formData.reasons.some((item: string) => item === 'Item #01')}
                    reversedElements={false}
                    setFormData={setFormData}
                />
                <Checkbox
                    id='select-reasons-02'
                    name='reasons'
                    label='Item #02'
                    isChecked={formData.reasons.some((item: string) => item === 'Item #02')}
                    reversedElements={false}
                    setFormData={setFormData}
                />
            </form>
            <div className={cn('filter__actions')}>
                <Button
                    buttonType='secondary-default'
                    action={clearFilterFormData}
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