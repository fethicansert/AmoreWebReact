import '../../copmonents/padding_container';
import React, { useEffect } from 'react'
import Hero from './sections/hero';
import Info from './sections/info';
import InfoImages from './sections/info_images';
import Introduction from './sections/introduction';
import Footer from './sections/footer';

import { useBanner } from '../../hooks/use_banner';

const Home = () => {

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FEEDF4');
    }, [])

    const { showLogin, setShowLogin } = useBanner();

    console.log(showLogin);


    return (
        <div className='home'>
            <Hero />
            <Info />
            <InfoImages />
            <Introduction />
            <Footer />
        </div>
    )
}

export default Home
