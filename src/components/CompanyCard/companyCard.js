import React from 'react';
import defaultClasses from './companyCard.module.scss';

const CompanyCard = ({ src, ...props }) => {
    return (
        <div className={defaultClasses.root}>
            <img src={src} />
        </div>
    )
}

export default CompanyCard;