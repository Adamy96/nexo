import React from 'react';
import defaultClasses from './header.module.scss';

import { ReactComponent as Dots } from '@assets/svg/homepage/dots.svg';
import { ReactComponent as Globe } from '@assets/svg/homepage/globe.svg';
import { ReactComponent as HorizontalLines } from '@assets/svg/homepage/horizontalLines.svg';
// import { ReactComponent as Line1 } from '@assets/svg/homepage/line1.svg'

import Typography from '@components/Typography';
import Button from '@components/Button';

const Header = () => {
    return (
        <div className={defaultClasses.root}>
            <Dots className={defaultClasses.dots} />
            <Globe className={defaultClasses.globe} />
            <HorizontalLines className={defaultClasses.horizontalLines} />
            {/* <Line1 className={defaultClasses.line1} /> */}

            <Typography variant='h1' color='light' classes={defaultClasses.title} >
                A sua carreira<br/>é você quem faz
            </Typography>
            <Typography variant='body4' color='light' secondary >
                Um diploma não pode te definir.<br/>Seja o que você quiser!
            </Typography>
            <Button color='primary' classes={defaultClasses.btn}>
                <Typography variant='body1' color='light' spacing='small'>
                    PROCURAR VAGAS
                </Typography>
            </Button>
        </div>
    )
}

export default Header;