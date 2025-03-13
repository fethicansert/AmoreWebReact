import React from 'react'
import { ArrorHeadLeft, ArrowHeadRight } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'
import { Zoom } from 'react-slideshow-image'
import { v4 as uuidv4 } from 'uuid';

const SwipeSlide = ({ galeryPhotos, closeGalery, galeryPhotoIndex }) => {

    const properties = {
        prevArrow: <button className='swipe-slide-arrow-left-button'><ArrorHeadLeft strokeWidth='2.3' width='26' height='26' color={colors.brand1} /></button>,
        nextArrow: <button className='swipe-slide-arrow-right-button'><ArrowHeadRight strokeWidth='2.3' width='26' height='26' color={colors.brand1} /></button>
    };

    return (
        <div onClick={closeGalery} style={{ position: 'fixed', width: '100%', zIndex: 999, left: '0', right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>

            <div className="swipe-slide-container" >
                <Zoom
                    arrows={true}
                    {...properties}
                    infinite={galeryPhotos.current.length > 1}
                    defaultIndex={galeryPhotoIndex.current}
                    scale={1.4}
                    cssClass={'swipe-slide'}
                    transitionDuration={450}
                    easing='ease'
                >
                    {galeryPhotos?.current?.map(userPhoto => <div key={uuidv4()} className='swipe-item-slide-image-box'>
                        <img draggable={false} className='swipe-item-slide-image' src={userPhoto?.url} />
                    </div>)}
                </Zoom>

            </div>

        </div>
    )
}

export default SwipeSlide
