import React from 'react';

import { ReactComponent as SplashLeft } from '@assets/svg/homepage/splashLeft.svg';
import { ReactComponent as SplashRight } from '@assets/svg/homepage/splashRight.svg';

import Navbar from '@components/Navbar';
import Header from '@components/Header';
import InfoBlock from '@components/InfoBlock';

import defaultClasses from './homepage.module.scss';

const Homepage = () => {
    return (
        <div className={defaultClasses.root}>
            <SplashLeft className={defaultClasses.splashLeft} />
            <SplashRight className={defaultClasses.splashRight} />
            <Navbar />
            <Header />
            <section className={defaultClasses.infoContainer}>
                <InfoBlock
                    title='O lugar ideal'
                    description={'As melhores empresas reunidas com o mesmo propósito. Te achar!'}
                />
            </section>
            
        </div>
    )
}

export default Homepage;