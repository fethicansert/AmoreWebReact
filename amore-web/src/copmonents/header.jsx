import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FlexBox from "./flex_box";
import BasicButton from "./basic_button";
import { colors } from "../utils/theme";
import { useMediaPredicate } from "react-media-hook";
import { TbMenu2 } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { useBanner } from "../hooks/use_banner";
import { useAuth } from "../hooks/use_auth";
import { ROUTES } from "../utils/constants";
import { useAppData } from "../hooks/use_add_data";
import Flag from "react-flagkit";
import { ArrowDownIcon, LanguageIcon } from "../assets/svg/svg_package";
import { v4 as uuidv4 } from "uuid";

const languageList = [
  { flag: "TR", languageOption: "tr", languageText: "Türkçe" },
  { flag: "GB", languageOption: "en", languageText: "English" },
  { flag: "FR", languageOption: "fr", languageText: "Fraçais" },
  { flag: "IT", languageOption: "it", languageText: "Italiano" },
  { flag: "DE", languageOption: "de", languageText: "Deutsch" },
  { flag: "TR", languageOption: "tr", languageText: "Türkçe" },
  { flag: "GB", languageOption: "en", languageText: "English" },
];

const Header = ({
  backgroundColor,
  title,
  titleColor,
  icon,
  iconWidth,
  textColor,
  menuIconColor,
  hasShadow,
  hasBorder,
  languageButtonColor,
}) => {
  //STATES
  const hideButtons = useMediaPredicate("(min-width: 700px)");
  const hideNavigation = useMediaPredicate("(min-width: 900px)");
  const [showNav, setShowNav] = useState(false);
  const [showLanguageBox, setShowLanguageBox] = useState(false);

  //HOOKS
  const { auth, isAuthenticated } = useAuth();
  const { t, _ } = useTranslation();
  const { language, setLanguage } = useAppData();
  const { setShowLogin } = useBanner();
  const navigate = useNavigate();

  //EFFECTS
  useEffect(() => {
    if (hideButtons) {
      setShowNav(false);
    }
  }, [hideButtons]);

  //REF
  const selectedLanguageRef = useRef(
    languageList.find((_language) => _language.languageOption === language)
      .languageText
  );

  //UI
  return (
    <header
      style={{
        backgroundColor: backgroundColor,
        padding: !hideButtons ? "12px 17px" : "9px 17px",
        boxShadow: hasShadow ? ".5px .5px 3px rgba(0, 0, 0, 0.15)" : null,
        border: hasBorder ? "solid 1.5px var(--borderColor1)" : null,
      }}
    >
      <FlexBox
        gap={"10px"}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <img src={icon} width={iconWidth}></img>
        <h1 style={{ color: titleColor, cursor: "pointer" }}>{title}</h1>
      </FlexBox>

      {hideNavigation && (
        <FlexBox gap={"25px"}>
          <Link style={{ color: textColor }} to={"/about"}>
            {t("HEADER.AMORE_LINK_1")}
          </Link>
          <Link style={{ color: textColor }} to={"/about"}>
            {t("HEADER.AMORE_LINK_2")}
          </Link>
        </FlexBox>
      )}

      {hideButtons && (
        <FlexBox gap={"10px"}>
          <BasicButton
            fontSize={".85rem"}
            onClick={handleClick}
            width={"145px"}
            height={"48px"}
            borderRadius={"81px"}
            backgroundColor={colors.brand1}
            color={colors.whiteText}
          >
            {t(
              `HEADER.${
                Object.keys(auth).length > 0
                  ? "CONTINUE_BUTTON"
                  : "LOGIN_BUTTON"
              }`
            )}
          </BasicButton>

          <button
            style={{ background: languageButtonColor }}
            className={`header-language-dropbox-button ${
              showLanguageBox ? "active" : ""
            }`}
          >
            <FlexBox
              width={"100%"}
              style={{ cursor: "pointer", padding: "0 .7rem" }}
              alignItems="center"
              justifyContent="space-evenly"
              onClick={() => setShowLanguageBox((prev) => !prev)}
            >
              <LanguageIcon color={colors.whiteText} width={24} height={24} />
              <span style={{ color: colors.whiteText, fontSize: 13.5 }}>
                {selectedLanguageRef.current}
              </span>
              <ArrowDownIcon
                color={colors.whiteText}
                className={`header-language-dropbox-arrow ${
                  showLanguageBox ? "active" : ""
                }`}
                strokeWidth={1.5}
                width="18px"
                height="18px"
              />
            </FlexBox>

            <div
              style={{
                background: languageButtonColor,
                scrollbarColor: `${colors.whiteText} ${languageButtonColor}`,
              }}
              className={`header-language-dropbox ${
                showLanguageBox ? "active" : ""
              }`}
            >
              <ul className={`${showLanguageBox ? "active" : ""}`}>
                {languageList.map((language) => (
                  <li
                    key={uuidv4()}
                    onClick={() => {
                      handleChangeLanguage(language.languageOption);
                      selectedLanguageRef.current = language.languageText;
                    }}
                  >
                    <Flag country={language.flag} size={20} />
                    <span>{language.languageText}</span>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </FlexBox>
      )}

      {/* if burger menu clicked  and buttons are not showed thans render fixed nav*/}

      {!hideButtons && (
        <TbMenu2
          onClick={() => setShowNav((prev) => !prev)}
          color={menuIconColor}
          size={30}
          style={{ cursor: "pointer" }}
        />
      )}

      {/* if burger menu clicked  and buttons are not showed thans render fixed nav*/}

      {!hideButtons && (
        <div
          className={`fixed-navbar ${showNav ? "active" : ""}`}
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <BasicButton
            className="fixed-navbar-button"
            onClick={() => handleClick({ isMobile: true })}
            fontSize={".8rem"}
            style={{
              color: colors.whiteText,
              backgroundColor: colors.brand1,
              width: "100%",
              paddingBlock: ".9rem",
              borderRadius: "4px",
            }}
          >
            {t(
              `HEADER.${
                Object.keys(auth).length > 0
                  ? "CONTINUE_BUTTON"
                  : "LOGIN_BUTTON"
              }`
            )}
          </BasicButton>

          <Link
            className="fixed-navbar-link"
            style={{
              color: textColor,
              marginTop: "5px",
              textAlign: "center",
              width: "100%",
            }}
            to={"/about"}
          >
            Amore Hakkında
          </Link>

          <Link
            className="fixed-navbar-link"
            style={{
              color: textColor,
              marginTop: "5px",
              textAlign: "center",
              width: "100%",
            }}
            to={"/about"}
          >
            Amore Nedir ?
          </Link>
        </div>
      )}
    </header>
  );

  //FUNCTIONS

  //Set global language and close language dropbox
  function handleChangeLanguage(language) {
    setLanguage(language);
    setShowLanguageBox(false);
  }

  function handleClick({ isMobile = false }) {
    if (!isAuthenticated) {
      isMobile && setShowNav(false);
      setShowLogin(true);
    } else navigate(`${ROUTES.DASHBOARD}/${ROUTES.USER_SWIPE}`);
  }
};

export default Header;
