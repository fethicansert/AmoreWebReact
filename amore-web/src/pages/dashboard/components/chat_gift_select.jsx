import React, { useMemo, useState } from 'react'
import { useAppData } from '../../../hooks/use_add_data'
import { t } from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import { ArrorHeadLeft, ArrowHeadRight } from '../../../assets/svg/svg_package';

const ChatGiftSelect = () => {

    const { gifts } = useAppData();
    const giftCategories = getGiftTypes();
    const [activeCategorieId, setActiveCategorieId] = useState(null);

    const currentGifts = useMemo(() => {
        if (activeCategorieId === null) return gifts;
        return gifts.filter(gift => gift.giftCategory._id === activeCategorieId)
    }, [activeCategorieId]);

    console.log(currentGifts);


    return (
        <div className='chat-gift-select'>
            <div className='chat-gift-select-filter'>
                <div onClick={() => setActiveCategorieId(null)} className={`chat-gift-select-filter-item ${activeCategorieId === null ? 'active' : ''}`} key={uuidv4()}>Tüm İçerikler</div>
                {giftCategories.map(categorie => <div className={`chat-gift-select-filter-item ${activeCategorieId === categorie._id ? 'active' : ''}`} onClick={() => setActiveCategorieId(categorie._id)} key={uuidv4()}>{categorie.name}</div>)}
            </div>

            <div className='chat-gifts'>

                <div className='chat-gifts-scroll-button'>
                    <ArrorHeadLeft strokeWidth='1.8' />
                </div>

                <div className='chat-gifts-wrapper'>
                    {currentGifts.map(gift => <div className='chat-gift-container'>
                        <img src={gift.url} />
                    </div>)}

                </div>

                <div className='chat-gifts-scroll-button'>
                    <ArrowHeadRight strokeWidth='1.8' />
                </div>
            </div>
        </div>
    );


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
