import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAppData } from "../../../hooks/use_add_data";
import { v4 as uuidv4 } from "uuid";
import {
  AmoreCoinIcon,
  AmoreHeartIcon,
  ArrorHeadLeft,
  ArrowHeadRight,
} from "../../../assets/svg/svg_package";
import { useAuth } from "../../../hooks/use_auth";
import { useTranslation } from "react-i18next";

const ChatGiftSelect = ({ sendGift }) => {
  //CONTEXT
  const {
    appData: { gifts },
  } = useAppData();

  const { auth } = useAuth();
  const { t, _ } = useTranslation();

  //STATES
  const [activeCategorieId, setActiveCategorieId] = useState(null);

  //CONSTANTS
  const currentGifts = useMemo(
    () =>
      activeCategorieId === null
        ? gifts.sort((a, b) => b.price - a.price)
        : gifts
          .filter((gift) => gift.giftCategory._id === activeCategorieId)
          .sort((a, b) => b.price - a.price),
    [activeCategorieId, gifts]
  );
  const giftCategories = getGiftTypes();

  //REF
  const giftsRef = useRef();

  useEffect(() => {
    giftsRef.current.scroll({ left: 0, behavior: "instant" });
  }, [activeCategorieId]);

  return (
    <div className="chat-gift-select">
      <div className="chat-gift-select-filter">
        <div className="chat-gift-select-filter-items-wrapper">
          <div
            onClick={() => setActiveCategorieId(null)}
            className={`chat-gift-select-filter-item ${activeCategorieId === null ? "active" : ""
              }`}
            key={uuidv4()}
          >
            {t("GIFTS.CATEGORIE_TITLES.ALL")}
          </div>
          {giftCategories.map((categorie) => (
            <div
              className={`chat-gift-select-filter-item ${activeCategorieId === categorie._id ? "active" : ""
                }`}
              onClick={() => setActiveCategorieId(categorie._id)}
              key={uuidv4()}
            >
              {t(`GIFTS.CATEGORIE_TITLES.${categorie?.name.toUpperCase()}`)}
            </div>
          ))}
        </div>

        <div className="chat-gift-select-filter-user-coin">
          <AmoreCoinIcon className="amore-coin-icon chat-gift-select-coin" width="20" height="20" />
          <span>{auth?.credits}</span>
        </div>
      </div>

      <div className="chat-gifts">
        <div
          className="chat-gifts-scroll-button"
          onClick={() => scrollGifts(-115)}
        >
          <ArrorHeadLeft strokeWidth="1.8" width="14" height="14" />
        </div>

        <div className="chat-gifts-wrapper" ref={giftsRef}>
          {currentGifts.map((gift) => (
            <div
              key={uuidv4()}
              onClick={() => sendGift({ messageType: 'gift', gift: gift })}
              className="chat-gift-container"
            >
              <img src={gift.url} draggable="false" />
              <div className="chat-gift-price">
                <AmoreHeartIcon width="11" height="11" className="chat-gift-amore-icon" /> {gift.price}
              </div>
            </div>
          ))}
        </div>

        <div
          className="chat-gifts-scroll-button"
          onClick={() => scrollGifts(115)}
        >
          <ArrowHeadRight strokeWidth="1.8" width="14" height="14" />
        </div>
      </div>
    </div>
  );

  function scrollGifts(scroll) {
    giftsRef.current.scrollBy(scroll, 0);
  }

  function getGiftTypes() {
    const categorieIds = [];
    const categories = [];

    gifts.forEach((gift) => {
      if (!categorieIds.includes(gift.giftCategory._id)) {
        categorieIds.push(gift.giftCategory._id);
        categories.push(gift.giftCategory);
      }
    });

    return categories;
  }
};

export default ChatGiftSelect;
