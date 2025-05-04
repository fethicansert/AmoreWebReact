import React, { useEffect, useMemo, useRef, useState } from "react";
import { axiosAmore } from "../../../api/axios";
import { useAuth } from "../../../hooks/use_auth";
import "../../../css/dashboard/discover.css";
import "react-slideshow-image/dist/styles.css";
import AmoreLoading from "../../../copmonents/amore_loading.jsx";
import CurrentUserInfoBox from "../../../copmonents/current_user_info_box.jsx";
import { colors } from "../../../utils/theme.js";
import FlexBox from "../../../copmonents/flex_box.jsx";
import BasicButton from "../../../copmonents/basic_button.jsx";
import { DiscoverIcon, SearchIcon } from "../../../assets/svg/svg_package.jsx";
import { useMediaPredicate } from "react-media-hook";
import UserCard from "../../../copmonents/user_card.jsx";
import FilterSlider from "../../../copmonents/filter_slider.jsx";
import CustomRadio from "../../../copmonents/custom_radio.jsx";
import PremiumBox from "../../../copmonents/premium_box.jsx";
import { useTranslation } from "react-i18next";
import SimplePopup from "../components/empty_users_popup.jsx";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  //STATES
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrollLoading, setIsScrollLoading] = useState(false);
  const [age, setAge] = useState([25, 80]);
  const [name, setName] = useState("");
  const [selectedUserStatus, setSelectedUserStatus] = useState("online");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  //COMPONENT CONSTANTS
  const userStatus = [
    { name: "ONLINE", value: "online" },
    { name: "OFFLINE", value: "offline" },
  ];

  //MEMOIZED
  const searchedUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(name?.toLowerCase())
      ),
    [name, users]
  );

  //MEDIA
  const isMobile = useMediaPredicate("(max-width:630px)");

  const showCurrentUserBox = useMediaPredicate("(max-width:500px)");

  //REFS
  const currentPage = useRef(1);

  //CONTEXT
  const { auth } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  //SIDE_EFFECTS
  useEffect(() => {
    fetchUsers(setIsLoading);
  }, []);

  //UI
  return (
    <section className="discover">
      <div className="discover-users-side-bar">
        <div className="discover-users-filter">
          <div className="discover-users-filter-header">
            {!showCurrentUserBox && <CurrentUserInfoBox />}

            <div style={{ padding: ".7rem", width: "100%" }}>
              <BasicButton
                onClick={() => setShowFilter((prev) => !prev)}
                className="discover-users-filter-header-btn"
                height={"45px"}
                width={"100%"}
                backgroundColor={colors.brand1}
                borderRadius={"10px"}
              >
                {t("FILTER.FILTER_BUTTON")}
              </BasicButton>
            </div>
          </div>

          <div
            className="discover-users-filter-selection"
            style={{
              display: !isMobile
                ? "flex"
                : isMobile && !showFilter
                ? "none"
                : "flex",
            }}
          >
            <div>
              <FlexBox flexDirection="column" alignItems="start">
                <span style={{ color: colors.darkText, fontSize: ".8rem" }}>
                  {t("FILTER.NAME")}
                </span>

                <div
                  onMouseEnter={() => setIsInputHovered(true)}
                  onMouseLeave={() => setIsInputHovered(false)}
                  className="discover-user-filter-input-container"
                  style={{
                    border:
                      isInputFocused || isInputHovered
                        ? `1px solid ${colors.brand1}`
                        : `1px solid ${colors.borderColor1}`,
                    background:
                      isInputFocused || isInputHovered
                        ? colors.backGround3
                        : colors.inputColor,
                  }}
                >
                  <SearchIcon color={colors.fadedText} />

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    style={{
                      background:
                        isInputHovered || isInputFocused
                          ? colors.whiteText
                          : colors.inputColor,
                    }}
                    className="discover-user-filter-input"
                    type="text"
                    placeholder={t("FILTER.NAME_PLACEHOLDER")}
                  ></input>
                </div>
              </FlexBox>

              <FilterSlider
                min={18}
                max={99}
                value={age}
                setValue={setAge}
                title={t("FILTER.AGE")}
                valueTitle={`${age[0]}-${age[1]}`}
              />

              <div className="discover-user-filter-radio-group">
                <span style={{ color: colors.darkText, fontSize: ".8rem" }}>
                  {t("FILTER.USER_STATUS")}
                </span>

                <div className="discover-user-filter-radio-wrapper">
                  {userStatus.map((status, index) => (
                    <CustomRadio
                      key={index}
                      text={t(`STATUS.${status.name}`)}
                      value={status.value}
                      onClick={() => setSelectedUserStatus(status.value)}
                      isSelected={status.value === selectedUserStatus}
                    />
                  ))}
                </div>
              </div>
            </div>

            <BasicButton
              fontSize={".8rem"}
              style={{ zIndex: "1", marginTop: "1rem" }}
              onClick={() => {
                fetchUsers(setIsLoading);
                showFilter ? setShowFilter(false) : undefined;
              }}
              width={"100%"}
              height={"50px"}
              backgroundColor={colors.brand1}
              color={colors.whiteText}
              borderRadius={"12px"}
            >
              {t("FILTER.APPLY_FILTER_BUTTON")}
            </BasicButton>
          </div>
        </div>

        {!isMobile && <PremiumBox />}
      </div>

      <div className="discover-users" onScroll={handleScrollFetch}>
        {isLoading ? (
          Array(20)
            .fill()
            .map((_, i) => (
              <div key={i} className="discover-user-box loading">
                <AmoreLoading amoreWidth={"32%"} style={{ opacity: ".6" }} />
              </div>
            ))
        ) : searchedUsers.length > 0 ? (
          <>
            {searchedUsers.map((user, index) => (
              <UserCard isDiscover={true} key={index} user={user} />
            ))}

            {isScrollLoading &&
              Array(20)
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
          <SimplePopup
            icon={
              <DiscoverIcon
                className=""
                width="50px"
                height="50px"
                strokeWidth={1.3}
              />
            }
            title={"Kullanıcı Bulunamadı!"}
            text={
              "Daha fazla kişiyi görmek için lokasyonunu genişletebilir veya filtrelerini değiştirebilirsin."
            }
            buttonText={"Konum Değiştir"}
            onClick={() => navigate("/dashboard/user-profile")}
          />
        )}
      </div>
    </section>
  );

  //FUNCTIONS
  async function handleScrollFetch(e) {
    const scrollDiv = e.target;
    const isBottom =
      scrollDiv.scrollTop + scrollDiv.clientHeight >=
      scrollDiv.scrollHeight - 50;

    if (isBottom && !isScrollLoading && !isLoading)
      fetchUsers(setIsScrollLoading);
  }

  async function fetchUsers(loading) {
    loading?.(true);

    try {
      const headers = { Authorization: auth.token };
      const response = await axiosAmore.get(
        `user/all_v3?minAge=${age[0]}&maxAge=${age[1]}&${selectedUserStatus}=true&page=${currentPage.current}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        setUsers((prev) => [...prev, ...response.data.data]);
        currentPage.current += 1;
      }
    } catch (e) {
      console.log(e);
    } finally {
      loading?.(false);
    }
  }
};

export default Discover;
