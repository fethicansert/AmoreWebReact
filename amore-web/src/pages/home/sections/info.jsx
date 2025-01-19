import React from 'react'
import '../../../css/home/info_section.css'
import PaddingContainer from '../../../copmonents/padding_container';
import AvatarContainer from '../comps/avatar_container';
import user1 from '../../../assets/images/avatar1.png'
import user2 from '../../../assets/images/avatar2.png'
import user3 from '../../../assets/images/avatar3.png'
import user4 from '../../../assets/images/avatar4.png'
import user5 from '../../../assets/images/avatar5.png'
import user6 from '../../../assets/images/avatar6.png'
import user7 from '../../../assets/images/avatar7.png'
import FlexBox from '../../../copmonents/flex_box';
import BasicButton from '../../../copmonents/basic_button';
import { colors } from '../../../utils/theme';
import { useMediaPredicate } from "react-media-hook";
import phoneImage from '../../../assets/images/image3.png'
import { v4 as uuidv4 } from 'uuid';
import { useTranslation, Trans } from 'react-i18next';


const Info = () => {

    const girls = [
        { image: user1, name: "Ahsen" },
        { image: user2, name: "Burçin" },
        { image: user3, name: "Damla" },
        { image: user4, name: "Ayça" },
        { image: user5, name: "Aleyna" },
        { image: user6, name: "Ateş" },
        { image: user7, name: "Alev" }
    ];

    const flexRow = useMediaPredicate("(min-width: 820px)");

    const { t, i18n } = useTranslation();

    return (
        <section className='info-section'>
            <PaddingContainer top={`${flexRow ? '50' : '40'}px`} bottom='20px'>
                <h2 className='info-title'>
                    <Trans
                        i18nKey={'home.info.title'}
                        components={
                            { pink: <span /> }
                        }
                    />
                </h2>
            </PaddingContainer>

            <div className='avatar-carousel-wrapper'>
                <div className='avatar-carousel'>
                    {girls.map((user, index) => <AvatarContainer key={uuidv4()} name={girls[index].name} image={girls[index].image} />)}
                </div>
            </div>

            <PaddingContainer
                className={'info-container'}
                left={`${flexRow ? '25' : '10'}px`}
                right={`${flexRow ? '25' : '10'}px`}
                top='clamp(50px, 7vw, 100px)'
                bottom='clamp(50px, 7vw, 120px)'
                margin='0 auto' >
                <FlexBox width={'100%'} flexDirection={`${flexRow ? 'row' : 'column'}`} gap={`${flexRow ? '0' : '2.5rem 0'}`}>
                    <FlexBox alignItems={`${flexRow ? 'flex-start' : 'center'}`} flexDirection='column' width={`${flexRow ? '50' : '95'}%`}>

                        <h2
                            style={{ textAlign: flexRow ? 'start' : 'center' }} className='info-text'>
                            <Trans
                                i18nKey={'home.info.subTitle'}
                                components={
                                    { pink: <span /> }
                                }
                            />
                        </h2>
                        <p style={{ textAlign: flexRow ? 'start' : 'center' }}>{t('home.info.text')}</p>

                        <BasicButton
                            backgroundColor={colors.brand1}
                            color={colors.whiteText}
                            width={`${flexRow ? '150px' : '100%'}`}
                            height={`${flexRow ? '47.5' : '52'}px`}
                            borderRadius={'25px'}>
                            {t('home.info.infoButton')}
                        </BasicButton>

                    </FlexBox>

                    <FlexBox width={`${flexRow ? '50%' : '100%'}`} alignItems='center' justifyContent={`${flexRow ? 'flex-end' : 'center'}`} className='info-container-image'>
                        <img src={phoneImage}></img>
                    </FlexBox>
                </FlexBox>
            </PaddingContainer>
        </section >
    )
}

export default Info
