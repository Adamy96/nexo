import React from 'react';

import Typography from '@components/Typography';

import defaultClasses from './infoBlock.module.scss';

const InfoBlock = ({ title, description, content, ...props }) => {
    return (
        <div className={defaultClasses.root}>
            <Typography variant='title' color='primary' classes={defaultClasses.title} underline>
                { title }
            </Typography>
            <Typography variant='body4' secondary classes={defaultClasses.description}>
                { description }
            </Typography>
        </div>
    )
}

export default InfoBlock;