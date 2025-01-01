import '../../copmonents/padding_container';

import React from 'react'
import Hero from './sections/hero';
import Info from './sections/info';
import InfoImages from './sections/info_images';
import Introduction from './sections/introduction';
import Footer from './sections/footer';

const Home = () => {
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
