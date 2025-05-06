import React, { useState } from "react";
import CustomRadioKey from "../../../copmonents/custom_radio_key";
import { colors } from "../../../utils/theme";
import UserSettingsButton from "../components/user_settings_button";
import {
  AppVersionIcon,
  ArrowHeadRight,
  CrossCloseIcon,
  DeleteAccountIcon,
  PrivacyPolicyIcon,
  TermsOfServiceIcon,
  VibrationIcon,
} from "../../../assets/svg/svg_package";
import UserDeleteButton from "../components/user_delete_button";
import UserProfileHeader from "../components/user_profile_header";
import FixedOverflow from "../../../copmonents/fixed_overflow";
import { ClipLoader } from "react-spinners";
import { axiosAmore } from "../../../api/axios";

import DeleteAccountPopup from "../components/delete_account_popup";
import { createOtp } from "../../../utils/functions";
import { useAuth } from "../../../hooks/use_auth";
import SimplePopup from "../../../copmonents/simple_popup";
import SimpleLoading from "../components/simple_loading";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../../hooks/use_localstorage";

const UserSettings = () => {
  //STATES
  const [text, setText] = useState(false);
  const [textLoading, setTextLoading] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [showVerifyDelete, setShowVerifyDelete] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [otpId, setOtpId] = useState("");
  const [error, setError] = useState("");
  const [notificationOptions, setNotificationOptions] = useLocalStorage(
    "notificationOptions",
    {}
  );

  //CONTEXT
  const { auth } = useAuth();
  const { t } = useTranslation();

  return (
    <>
      <div className="user-settings">
        <UserProfileHeader />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "15px",
            marginBlock: "2rem 15px",
          }}
        >
          <CustomRadioKey
            onToogle={() =>
              setNotificationOptions((prev) => ({
                ...prev,
                show: !prev?.show,
              }))
            }
            height={"53px"}
            isActive={notificationOptions?.show}
            leading={<VibrationIcon />}
            text={t("DASHBOARD.PROFILE.SETTINGS.NOTIFICATION")}
            activeColor={colors.brand1}
            notActiveColor={colors.fadedText}
          />
          <CustomRadioKey
            onToogle={() =>
              setNotificationOptions((prev) => ({
                ...prev,
                sound: !prev?.sound,
              }))
            }
            height={"53px"}
            isActive={notificationOptions?.sound}
            leading={<VibrationIcon />}
            activeColor={colors.brand1}
            text={t("DASHBOARD.PROFILE.SETTINGS.NOTIFICATION_SOUND")}
            notActiveColor={colors.fadedText}
          />
          <UserSettingsButton
            onClick={() => fetchText("privacy_policy")}
            height={"53px"}
            leading={<PrivacyPolicyIcon />}
            text={t("DASHBOARD.PROFILE.SETTINGS.PRIVACY_POLICY")}
            trealing={
              <ArrowHeadRight
                width="19px"
                height="19px"
                color={colors.darkText}
              />
            }
          />
          <UserSettingsButton
            onClick={() => fetchText("terms")}
            height={"53px"}
            leading={<TermsOfServiceIcon />}
            text={t("DASHBOARD.PROFILE.SETTINGS.TERMS_OF_SERVICE")}
            trealing={
              <ArrowHeadRight
                width="19px"
                height="19px"
                color={colors.darkText}
              />
            }
          />
        </div>

        <UserSettingsButton
          onClick={null}
          height={"53px"}
          leading={<AppVersionIcon />}
          text={t("DASHBOARD.PROFILE.SETTINGS.VERSION")}
          trealing={
            <span style={{ fontSize: ".85rem", fontWeight: "300" }}>
              2.0.9+209
            </span>
          }
        />

        <UserDeleteButton
          onClick={() => {
            setShowOverflow(true);
            setShowVerifyDelete(true);
          }}
        />

        {error && (
          <p className="error-text" style={{ marginTop: "1rem" }}>
            {error}
          </p>
        )}
      </div>

      {showOverflow && (
        <FixedOverflow
          blur={"2px"}
          onClick={(e) => {
            if (e.target.className === "fixed-overflow") {
              setShowOverflow(false);
              setShowDeletePopup(false);
              setShowVerifyDelete(false);
              setText(false);
              setTextLoading(false);
            }
          }}
        >
          {otpLoading && (
            <SimpleLoading
              text={"4 haneli kodunuz cep telofunuza gönderiliyor"}
            />
          )}

          {showDeletePopup && <DeleteAccountPopup otpId={otpId} />}

          {showVerifyDelete && (
            <SimplePopup
              onYes={onVerifyConfirm}
              onNo={() => {
                setShowOverflow(false);
                setShowVerifyDelete(false);
              }}
              icon={<DeleteAccountIcon width="30" height="30" />}
              title={"Hesap Sil"}
              text={`${auth?.name} adlı hesabını silmek istediğine emin misin ?`}
            />
          )}

          {textLoading && (
            <div>
              <ClipLoader color={colors.brand1} size={50} />
            </div>
          )}
          {text && (
            <div
              style={{
                position: "relative",
                width: "80%",
                maxWidth: "500px",
                animation: "fade 250ms ease",
              }}
            >
              <div
                onClick={() => {
                  setText("");
                  setShowOverflow(false);
                }}
                style={{
                  width: "30px",
                  height: "30px",
                  position: "absolute",
                  right: "-12px",
                  top: "-20px",
                  background: colors.negativeBlack,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  cursor: "pointer",
                }}
              >
                <CrossCloseIcon width="22" height="22" />
              </div>

              <div
                style={{
                  background: "white",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "12px",
                  maxHeight: "90vh",
                  overflow: "scroll",
                  position: "relative",
                }}
              >
                <p>{text}</p>
              </div>
            </div>
          )}
        </FixedOverflow>
      )}
    </>
  );

  async function onVerifyConfirm() {
    setOtpLoading(true);
    setShowVerifyDelete(false);

    const body = {
      phone: auth?.phone,
    };

    try {
      const response = await axiosAmore.post("/otp/create", body);
      console.log(response);
      setOtpId(response.data.data.oneTimePasswordId);
      setShowDeletePopup(true);
    } catch (e) {
      setShowOverflow(false);
      const response = e?.response?.data?.response;
      // HANDLE ERROR HERE
      if (response) {
        setError(
          t(`ERRORS.DELETE_ACCOUNT.${response.message}`, {
            time: response?.code,
          })
        );
      } else {
        setError(t("ERRORS.UNEXPECTED_ERROR.TITLE"));
      }
    } finally {
      setOtpLoading(false);
    }
  }

  async function fetchText(url) {
    setShowOverflow(true);
    setTextLoading(true);
    try {
      const response = await axiosAmore.get(`api/${url}`);
      if (response.status === 200) {
        setText(response.data.data.content);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setTextLoading(false);
    }
  }
};

export default UserSettings;
