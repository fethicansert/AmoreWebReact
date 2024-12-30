import '../../copmonents/padding_container';

import React from 'react'
import Hero from './sections/hero';
import Info from './sections/info';
import InfoImages from './sections/info_images';
import Introduction from './sections/introduction';

const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Info />
            <InfoImages />
            <Introduction />
        </div>
    )
}

export default Home
