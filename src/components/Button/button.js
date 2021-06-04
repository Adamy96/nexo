import React from 'react';
import defaultClasses from './button.module.scss';

const Button = ({ variant, classes, color, children, ...props }) => {
    const colorClass = color ? defaultClasses[`color-${color}`] : '';

    return (
        <button
            className={`
                ${colorClass}
                ${defaultClasses.root}
                ${classes}
            `}
        >
            { children }
        </button>
    )
}

export default Button;