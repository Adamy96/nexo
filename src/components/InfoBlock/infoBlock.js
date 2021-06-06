import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@components/Typography';

import defaultClasses from './infoBlock.module.scss';

const InfoBlock = ({ title, description, content, align, ...props }) => {
    const alignClass = align ? defaultClasses[`align-${align}`] : '';

    return (
        <div className={defaultClasses.root}>
            <div className={`
                ${defaultClasses.titleContainer}
                ${alignClass}
            `}>
                <Typography variant='title' color='primary' classes={defaultClasses.title} underline>
                    { title }
                </Typography>
                <div className={defaultClasses.underline}></div>
            </div>
            
            <Typography variant='body4' secondary classes={defaultClasses.description}>
                { description }
            </Typography>
        </div>
    )
}

InfoBlock.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.node,
    align: PropTypes.oneOf(['left', 'center', 'right'])
}

export default InfoBlock;