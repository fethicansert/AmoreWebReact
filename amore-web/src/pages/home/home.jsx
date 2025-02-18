import '../../copmonents/padding_container';
import React, { useEffect } from 'react';
import Hero from './sections/hero';
import Info from './sections/info';
import InfoImages from './sections/info_images';
import Introduction from './sections/introduction';
import Footer from './sections/footer';
import { changeRootThemeColor } from '../../utils/functions';

const Home = () => {

    useEffect(() => { changeRootThemeColor('#F9E8EF') }, []);

    return (
        <div className='home'>
            <Hero />
            <Info />
            <InfoImages />
            <Introduction />
            <Footer />
        </div>
    );
}

export default Home;
