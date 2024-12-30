import React from 'react'
import PaddingContainer from '../../../copmonents/padding_container'
import '../../../css/home/introduction_section.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../../../assets/images/image_1.png';
import image2 from '../../../assets/images/image_2.png';
import image3 from '../../../assets/images/image_3.png';


const Introduction = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];


    const indicators = () => (<div className="indicator"></div>);

    const responsiveSettings = [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },

    ];
    return (
        <div className='introduction-section'>
            <PaddingContainer top='100px' bottom='100px' left='10px' right='10px'>
                <h2>Diğer Dating’lerden Farklıyız<br></br><span>Çünkü</span></h2>

                <p>
                    Amore, sadece eşleşmeleri değil, anlamlı ve uzun soluklu ilişkiler kurmayı hedefler. Kullanıcı dostu tasarımı, güvenli ortamı ve samimi topluluğu ile burada aradığınız sevgi ve dostluğu bulmanız için her şey hazır!
                </p>

                <Slide indicators={indicators} responsive={responsiveSettings} autoplay={false} arrows={null} cssClass='carousel' transitionDuration={300} easing='ease-out'>
                    <div className='box'>
                        <img src={image1}></img>
                    </div>

                    <div className='box'>
                        <img src={image2}></img>
                    </div>
                    <div className='box'>
                        <img src={image3}></img>
                    </div>
                </Slide>


            </PaddingContainer>





        </div>
    )
}

export default Introduction
