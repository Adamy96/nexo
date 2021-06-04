import React from 'react';
import defaultClasses from './navbar.module.scss';

import Typography from '@components/Typography';
import { ReactComponent as Logo } from '@assets/svg/logo.svg';

const Navbar = () => {
    return (
        <nav className={defaultClasses.root}>
            <Logo />
            <button className={defaultClasses.loginBtn}>
                <Typography variant='body1' color='primary'>
                    ENTRAR
                </Typography>
            </button>
        </nav>
    )
}

export default Navbar;