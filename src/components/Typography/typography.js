import React from 'react';
import defaultClasses from './typography.module.scss';

const variantsMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    title: 'h6',
    body1: 'p',
    body2: 'p',
    body3: 'p',
    body4: 'p'
};

const Typography = ({ variant, classes, color, children, secondary, spacing, underline, ...props}) => {
    const Component = variant ? variantsMapping[variant] : 'p';
    const variantClass = variant ? defaultClasses[`variant-${variant}`] : null;
    const colorClass = color ? defaultClasses[`color-${color}`] : null;
    const fontFamilyClass = secondary ? defaultClasses.ffSecondary : null;
    const letterSpacingClass = spacing ? defaultClasses[`spacing-${spacing}`] : null;
    const underlineClass = underline ? defaultClasses.underline : null;

    return (
        <div className={defaultClasses.root}>
            <Component
                className={`
                    ${variantClass}
                    ${colorClass}
                    ${fontFamilyClass}
                    ${letterSpacingClass}
                    
                    ${classes}
                `}
                {...props}
            >
                { children }
            </Component>
            <div className={underlineClass}></div>
        </div>
    )
}

export default Typography;