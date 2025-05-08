import React, { useEffect, useRef, useState } from "react";
import CustomRadioBox from "../../../copmonents/custom_radibox";
import Flag from "react-flagkit";
import { colors } from "../../../utils/theme";
import { useAuth } from "../../../hooks/use_auth";
import { useAppData } from "../../../hooks/use_add_data";
import UserProfileHeader from "../components/user_profile_header";
import { axiosAmore } from "../../../api/axios";
import FixedOverflow from "../../../copmonents/fixed_overflow";
import { ClipLoader, ClockLoader } from "react-spinners";
import SimpleLoading from "../components/simple_loading";
import { useTranslation } from "react-i18next";
import { useMediaPredicate } from "react-media-hook";

const languages = [
  { country: "GB", text: "English", value: "en" },
  { country: "DE", text: "Deutsch", value: "de" },
  { country: "ES", text: "Spanish", value: "es" },
  { country: "FR", text: "Français", value: "fr" },
  { country: "TR", text: "Türkçe", value: "tr" },
  { country: "RU", text: "Русский", value: "ru" },
  { country: "IT", text: "Italiano", value: "it" },
  { country: "NL", text: "Nederlands", value: "nl" },
];

const UserLanguage = () => {
  //CONTEXT
  const { auth, setAuth } = useAuth();
  const { language, setLanguage } = useAppData();

  //STATE
  const [loading, setLoading] = useState();

  const { t } = useTranslation();

  const isMobile = useMediaPredicate("(max-width:500px)");

  return (
    <div className="language">
      <UserProfileHeader />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "15px",
          marginTop: `${isMobile ? "1rem" : "2rem"}`,
        }}
      >
        {languages.map((radioLanguage, index) => (
          <CustomRadioBox
            key={index}
            onClick={() => handleChangeLanguage(radioLanguage.value)}
            isSelected={radioLanguage.value === language}
            leading={<Flag country={radioLanguage.country} />}
            text={radioLanguage.text}
            width={"100%"}
            height={"53px"}
            selectColor={colors.brand1}
            selectRadius={"12px"}
          />
        ))}
      </div>

      {loading && (
        <FixedOverflow>
          <SimpleLoading
            text={t("DASHBOARD.PROFILE.LANGUAGE.LANGUAGE_CHANGING")}
          />
        </FixedOverflow>
      )}
    </div>
  );

  async function handleChangeLanguage(language) {
    setLoading(true);
    try {
      const response = await axiosAmore.post(
        "user/change_language",
        { language },
        { useAuth: true }
      );

      if (response?.data?.data?.status) {
        setAuth((prev) => ({ ...prev, language }));
        setLanguage(language);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
};

export default UserLanguage;
