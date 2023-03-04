import React, { FC, ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';
import { CompaniesListItem } from './CompaniesListItem';
import { ICompany } from '../../../../types/interfaces';
import { RootState } from '../../../../storage/store';
import classNames from 'classnames/bind';
import styles from './CompaniesList.module.scss';
const cn = classNames.bind(styles);

interface ICompaniesList {
    companies: Array<ICompany>
}

const CompaniesList: FC<ICompaniesList> = memo(({ companies }: ICompaniesList):ReactElement => {
    const { filteredCompanies } = useSelector((state: RootState) => state.companies);

    const renderCompaniesElements = (companiesArray: Array<ICompany> | []) => {
        return companiesArray.map((company: ICompany) => {
            return (
                <CompaniesListItem
                    key={company.id}
                    company={company}
                />
            )
        });
    };

    // const companiesElement = companies.map((company: ICompany) => {
    //     return (
    //         <CompaniesListItem
    //             key={company.id}
    //             company={company}
    //         />
    //     )
    // });

    return (
        <div className={cn('companies-list')}>
            <div className={cn('container')}>
                {filteredCompanies.length
                    ?
                    renderCompaniesElements(filteredCompanies)
                    :
                    renderCompaniesElements(companies)
                }
            </div>
        </div>
    );
});

export default CompaniesList;