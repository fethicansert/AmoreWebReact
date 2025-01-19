import '../../copmonents/padding_container';

import React, { useEffect, useState } from 'react'
import Hero from './sections/hero';
import Info from './sections/info';
import InfoImages from './sections/info_images';
import Introduction from './sections/introduction';
import Footer from './sections/footer';
import LoginPopup from '../../copmonents/login_popup';
import { useLoginPopup } from '../../hooks/use_login_popup';

const Home = () => {

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FEEDF4');
    }, [])

    const { showLoginPopup } = useLoginPopup()

    return (
        <div className='home'>
            <Hero />
            <Info />
            <InfoImages />
            <Introduction />
            <Footer />

            {showLoginPopup && <LoginPopup />}
        </div>
    )
}

export default Home
