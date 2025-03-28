import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useAppData } from '../../../hooks/use_add_data'
import { t } from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import { AmoreHeartIcon, ArrorHeadLeft, ArrowHeadRight } from '../../../assets/svg/svg_package';

const ChatGiftSelect = () => {

    //CONTEXT
    const { gifts } = useAppData();
    
    //STATES
    const [activeCategorieId, setActiveCategorieId] = useState(null);

    //CONSTANTS
    const currentGifts =  useMemo(() => activeCategorieId === null ? gifts.sort((a,b) => b.price - a.price) : gifts.filter(gift => gift.giftCategory._id === activeCategorieId).sort((a,b) => b.price - a.price) ,
    [activeCategorieId,gifts]);
    const giftCategories = getGiftTypes();

    //REF
    const giftsRef = useRef();

    useEffect(() => {
        giftsRef.current.scroll({left:0, behavior:'instant'});
    },[activeCategorieId])

    
    return (
        <div className='chat-gift-select'>
            <div className='chat-gift-select-filter'>
                <div onClick={() => setActiveCategorieId(null)} className={`chat-gift-select-filter-item ${activeCategorieId === null ? 'active' : ''}`} key={uuidv4()}>Tüm İçerikler</div>
                {giftCategories.map(categorie => <div className={`chat-gift-select-filter-item ${activeCategorieId === categorie._id ? 'active' : ''}`} onClick={() => setActiveCategorieId(categorie._id)} key={uuidv4()}>{categorie.name}</div>)}
            </div>

            <div className='chat-gifts'>

                <div className='chat-gifts-scroll-button'  onClick={() => scrollGifts(-115)}>
                    <ArrorHeadLeft strokeWidth='1.8'  width='14' height='14'/>
                </div>

                <div className='chat-gifts-wrapper' ref={giftsRef}>
                    {currentGifts.map(gift => <div className='chat-gift-container'>
                        <img src={gift.url} draggable="false" />
                        <div className='chat-gift-price'><AmoreHeartIcon width='11' height='11'/> {gift.price}</div>
                    </div>)}

                </div>

                <div className='chat-gifts-scroll-button' onClick={() => scrollGifts(115)}>
                    <ArrowHeadRight strokeWidth='1.8' width='14' height='14'/>
                </div>
            </div>
        </div>
    );

    function scrollGifts(scroll){
       giftsRef.current.scrollBy(scroll,0);   
    }

    function getGiftTypes() {
        const categorieIds = [];
        const categories = [];

        gifts.forEach(gift => {
            if (!categorieIds.includes(gift.giftCategory._id)) {
                categorieIds.push(gift.giftCategory._id)
                categories.push(gift.giftCategory);
            }
        });

        return categories;
    }
}

export default ChatGiftSelect
