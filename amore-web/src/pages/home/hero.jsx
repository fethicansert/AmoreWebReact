import React from 'react'
import PaddingContainer from '../../copmonents/padding_container';
import Header from '../../copmonents/header';
import colors from '../../theme/colors';
import amoreIcon from '../../assets/icons/amore_icon.png';

const Hero = () => {


    return (
        <section className='hero-section'>
            <PaddingContainer right={'10px'} left={'10px'} top={'30px'} >
                <Header
                    title={'Amore'}
                    titleColor={colors.brand1}
                    icon={amoreIcon}
                    iconWidth={35}
                    backgroundColor={colors.backGround4}
                    textColor={colors.whiteText}
                    menuIconColor={colors.backGround2}

                />



            </PaddingContainer>
        </section>
    );
}

export default Hero
