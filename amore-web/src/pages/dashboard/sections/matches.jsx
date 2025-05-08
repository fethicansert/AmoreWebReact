import React, { useEffect, useRef, useState } from "react";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box";
import { useAuth } from "../../../hooks/use_auth";
import FlexBox from "../../../copmonents/flex_box";
import { axiosAmore } from "../../../api/axios";
import UserCard from "../../../copmonents/user_card";
import AmoreLoading from "../../../copmonents/amore_loading";
import { colors } from "../../../utils/theme";
import CustomRadio from "../../../copmonents/custom_radio";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DoubleHeartIcon,
  HeartLineIcon,
  UserIcon,
} from "../../../assets/svg/svg_package";
import EmptyUsersPopup from "../components/simple_ok_popup";
import "../../../css/dashboard/matches.css";
import { useMediaPredicate } from "react-media-hook";

const emptyUserPopupContent = [
  {
    title: "Eşleşme Yok!",
    text: "Üzgünüz, şu an eşleşme bulunmamaktadır. Eşleşmek için sağa kaydırmayı deneyin.",
    icon: (
      <DoubleHeartIcon
        className=""
        width="55px"
        height="55px"
        strokeWidth={1.3}
      />
    ),
  },
  {
    title: "Henüz Beğeni Almadın!",
    text: "Şu an seni beğenen kimse yok. Daha fazla kişiyle etkileşim kurmak için aktif olmaya devam et!",
    icon: (
      <HeartLineIcon
        className=""
        color={colors.darkText}
        width="50px"
        height="50px"
        strokeWidth={1.3}
      />
    ),
  },
  {
    title: "Ziyaretçin Bulunamadı!",
    text: "Profilini henüz kimse ziyaret etmemiş. Daha fazla görünür olmak için profilini güncelleyebilir veya keşfetmeye başlayabilirsin!",
    icon: (
      <UserIcon className="" width="42px" height="42px" strokeWidth={1.3} />
    ),
  },
];

const Matches = () => {
  //LOCATION
  const location = useLocation();
  //STATES
  const [currentIndex, setCurrentIndex] = useState(getCurrentIndex());
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const [isScrollLoading, setIsScrollLoading] = useState(false);

  const currentPage = useRef(1);
  const stopFetchRef = useRef(false);

  //CONTEXT
  const { auth, isPremium } = useAuth();
  const { t, _ } = useTranslation();
  const navigate = useNavigate();

  const showableUserCount = getShowableUserCount();

  //MEDIA
  const isMobile = useMediaPredicate("(max-width:500px)");

  //REFs
  const discoverRef = useRef();

  //SIDE_EFFECTS
  useEffect(() => {
    setUsers([]);
    currentPage.current = 1;
    stopFetchRef.current = false;
    fetchData({ index: currentIndex, loading: setIsUsersLoading });
    discoverRef.current.scroll({
      top: 0,
      behavior: "instant",
    });
  }, [currentIndex]);

  return (
    <section className="matches">
      <div className="matches-header">
        <FlexBox
          className="matches-header-flex"
          height={"100%"}
          width={"100%"}
          alignItems="center"
        >
          {["MATCHES", "LIKES", "VISITS"].map((title, index) => (
            <CustomRadio
              className={"matches-custom-radio"}
              key={index}
              unSelectedTextColor={colors.darkText}
              padding=""
              fontSize=""
              onClick={() => setCurrentIndex(index)}
              isSelected={index === currentIndex}
              text={t(`ROUTE_NAMES.${title}`)}
              value={index}
            />
          ))}
        </FlexBox>

        {/* <CurrentUserInfoBox
          credits={auth.credits}
          name={auth.name}
          image={auth.photos?.[0].url}
        /> */}
      </div>

      <div
        className="discover-users"
        onScroll={handleScrollFetch}
        ref={discoverRef}
      >
        {isUsersLoading ? (
          Array(20)
            .fill()
            .map((_, i) => (
              <div key={i} className="discover-user-box loading">
                <AmoreLoading amoreWidth={"32%"} style={{ opacity: ".6" }} />
              </div>
            ))
        ) : users.length > 0 ? (
          <>
            {users.map((user, index) => (
              <UserCard
                isOnlyPremium={currentIndex === 0 ? false : !isPremium}
                isFromHome={
                  index < showableUserCount && currentIndex !== 0 && !isPremium
                }
                key={index}
                user={user}
              />
            ))}

            {isScrollLoading &&
              Array(10)
                .fill()
                .map((_, i) => (
                  <div key={i} className="discover-user-box loading">
                    <AmoreLoading
                      amoreWidth={"32%"}
                      style={{ opacity: ".6" }}
                    />
                  </div>
                ))}
          </>
        ) : (
          <EmptyUsersPopup
            icon={emptyUserPopupContent[currentIndex].icon}
            title={emptyUserPopupContent[currentIndex].title}
            text={emptyUserPopupContent[currentIndex].text}
            buttonText={"Kaydırmaya Başla"}
            onClick={() => navigate("/dashboard/user-swipe")}
          />
        )}
      </div>
    </section>
  );

  //FUNCTIONS
  function getShowableUserCount() {
    if (users.length >= 20) return 5;
    else if (users.length >= 10) return 2;
    else if (users.length >= 5) return 1;
  }

  //if users come from another page with params so chanhe index according to param
  function getCurrentIndex() {
    switch (location?.state?.type) {
      case "matches":
        return 0;
      case "like":
        return 1;
      case "visit":
        return 2;
      default:
        return 0;
    }
  }

  //Fetch User with given index
  async function fetchData({ index, loading }) {
    //If dowloading on scroll not need to show loading animation
    loading(true);

    //get fetch URL
    const link = getUrl(index);

    try {
      const response = await axiosAmore.get(
        `${link}?page=${currentPage.current}`,
        {
          headers: { Authorization: auth.token },
        }
      );
      if (response.status === 200) {
        //get fetched users
        const fetchedUsers = response.data.data;

        setUsers((prev) => [...prev, ...filterUserData(response.data.data)]);

        //Incresae page count to get next page on next fetch
        currentPage.current = currentPage.current + 1;

        if (fetchedUsers.length < 20) stopFetchRef.current = true;
      }
    } catch (e) {
      console.log(e);
    } finally {
      loading(false);
    }
  }

  //Get URL with given index
  function getUrl(index) {
    switch (index) {
      case 0:
        return "user/matches";
      case 1:
        return "user/likes";
      case 2:
        return "user/visits";
    }
  }

  //Liked users not always at index[0] get liked users using auth id
  function filterUserData(users) {
    return users.map((user) => {
      if (user.participants[0].id !== auth.id) return user.participants[0];
      return user.participants[1];
    });
  }

  async function handleScrollFetch(e) {
    //Stop fetch when users are fetching or users length smaller than 20
    if (isScrollLoading || stopFetchRef.current) return;

    const scrollDiv = e.target;
    const isBottom =
      scrollDiv.scrollTop + scrollDiv.clientHeight >=
      scrollDiv.scrollHeight - 50;

    if (isBottom) {
      fetchData({ index: currentIndex, loading: setIsScrollLoading });
    }
  }
};

export default Matches;
