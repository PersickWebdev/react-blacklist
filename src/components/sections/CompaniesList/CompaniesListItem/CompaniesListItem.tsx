import React, { FC, ReactElement, memo } from 'react';
import { ICompany } from '../../../../types/interfaces';
import classNames from 'classnames/bind';
import styles from './CompaniesListItem.module.scss';
const cn = classNames.bind(styles);

interface ICompaniesListItem {
    company: ICompany;
}

const CompaniesListItem: FC<ICompaniesListItem> = memo(({ company }: ICompaniesListItem):ReactElement => {
    return (
        <div className={cn('companies-list__item')}>
            <h3 className={cn('companies-list__item-heading')}>
                {company.name}
            </h3>
            <div className={cn('companies-list__item-content')}>
                <div className={cn('companies-list__item-section', 'image-box')}>
                    120x120
                </div>
                <div className={cn('companies-list__item-section')}>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.country}</span>
                    </p>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.city}</span>
                    </p>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.industry}</span>
                    </p>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.reason_type}</span>
                    </p>
                </div>
                <div className={cn('companies-list__item-section')}>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.key_person}</span>
                    </p>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.key_person_phone}</span>
                    </p>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.key_person_email}</span>
                    </p>
                    <p className={cn('companies-list__item-section-row')}>
                        <span>{company.manager}</span>
                    </p>
                </div>
                <div className={cn('companies-list__item-section')}>
                    <p className={cn('companies-list__item-section-row', 'description')}>
                        {company.reason_description}
                    </p>
                </div>
            </div>
        </div>
    );
});

export default CompaniesListItem;