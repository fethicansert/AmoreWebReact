import React from 'react'
import '../../../css/home/info_section.css'
import PaddingContainer from '../../../copmonents/padding_container';
import AvatarContainer from '../avatar_container';
import user1 from '../../../assets/images/avatar1.png'
import user2 from '../../../assets/images/avatar2.png'
import user3 from '../../../assets/images/avatar3.png'
import user4 from '../../../assets/images/avatar4.png'
import user5 from '../../../assets/images/avatar5.png'
import user6 from '../../../assets/images/avatar6.png'
import user7 from '../../../assets/images/avatar7.png'
import FlexBox from '../../../copmonents/flex_box';
import BasicButton from '../../../copmonents/basic_button';
import colors from '../../../theme/colors';
import { useMediaPredicate } from "react-media-hook";
import phoneImage from '../../../assets/images/image3.png'
import { v4 as uuidv4 } from 'uuid';


const Info = () => {

    const userImages = [user1, user2, user3, user4, user5, user6, user7]
    const userNames = ['Ahsen', 'Burçin', 'Damla', 'Ayça', 'Aleyna', 'Ateş', 'Alev'];

    const flexRow = useMediaPredicate("(min-width: 820px)");

    return (
        <section className='info-section'>
            <PaddingContainer top={`${flexRow ? '50' : '40'}px`} bottom='20px'>
                <h2 className='info-title'>40.000’dan fazla <span>kullanıcı</span></h2>
            </PaddingContainer>


            <div className='avatar-carousel-wrapper'>
                <div className='avatar-carousel'>
                    {userImages.map((user, index) => <AvatarContainer key={uuidv4()} name={userNames[index]} image={[userImages[index]]} />)}
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
                            style={{ textAlign: flexRow ? 'start' : 'center' }} className='info-text'>Dating’den<span> Çooooook </span> <br />
                            Daha Fazlası</h2>
                        <p style={{ textAlign: flexRow ? 'start' : 'center' }}>Amore, sadece bir dating uygulaması değil; anlamlı ilişkiler, samimi sohbetler ve gerçek bağlar kurabileceğiniz özel bir platform. Yeni arkadaşlıklar keşfedin, sevginizi bulun ve hayatınıza değer katacak deneyimlere adım atın!</p>

                        <BasicButton
                            backgroundColor={colors.brand1}
                            color={colors.whiteText}
                            width={`${flexRow ? '150px' : '100%'}`}
                            height={`${flexRow ? '47.5' : '52'}px`}
                            borderRadius={'25px'}>
                            Hemen Kaydol
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
