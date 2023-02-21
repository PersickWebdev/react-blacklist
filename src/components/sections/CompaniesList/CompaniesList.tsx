import React, { FC, CSSProperties, ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';
import { CompaniesListItem } from './CompaniesListItem';
import { RootState } from '../../../storage/store';
import { ICompany } from '../../../types/interfaces';
import classNames from 'classnames/bind';
import styles from './CompaniesList.module.scss';
const cn = classNames.bind(styles);

interface ICompaniesList {}

const CompaniesList: FC<ICompaniesList> = memo(({}: ICompaniesList):ReactElement => {
    const { companies } = useSelector((state: RootState) => state.companies);

    const companiesElement = companies.map((company: ICompany) => {
        return (
            <CompaniesListItem
                key={company.id}
                company={company}
            />
        )
    });

    return (
        <div className={cn('companies-list')}>
            <div className={cn('container')}>
                {companiesElement}
            </div>
        </div>
    );
});

export default CompaniesList;