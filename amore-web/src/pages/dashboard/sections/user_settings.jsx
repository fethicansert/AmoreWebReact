import React, { useRef, useState } from "react";
import CustomRadioKey from "../../../copmonents/custom_radio_key";
import { colors } from "../../../utils/theme";
import UserSettingsButton from "../components/user_settings_button";
import {
  AppVersionIcon,
  ArrowHeadRight,
  CrossCloseIcon,
  PrivacyPolicyIcon,
  TermsOfServiceIcon,
  VibrationIcon,
} from "../../../assets/svg/svg_package";
import UserDeleteButton from "../components/user_delete_button";
import UserProfileHeader from "../components/user_profile_header";
import BasicButton from "../../../copmonents/basic_button";
import FixedOverflow from "../../../copmonents/fixed_overflow";
import { ClipLoader } from "react-spinners";
import { axiosAmore } from "../../../api/axios";
import VerifyOtp from "../../register/sections/verify_otp";

const UserSettings = () => {
  const [text, setText] = useState(false);
  const [textLoading, setTextLoading] = useState(false);
  const [showOverflow, setShowOverflow] = useState(false);
  const [smsCode, setSmsCode] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });

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
            height={"53px"}
            isActive={true}
            leading={<VibrationIcon />}
            text={"Bildirim"}
            activeColor={colors.brand1}
            notActiveColor={colors.fadedText}
          />
          <CustomRadioKey
            height={"53px"}
            isActive={false}
            leading={<VibrationIcon />}
            activeColor={colors.brand1}
            text={"Bildirim Sesi"}
            notActiveColor={colors.fadedText}
          />
          <UserSettingsButton
            onClick={() => fetchText("privacy_policy")}
            height={"53px"}
            leading={<PrivacyPolicyIcon />}
            text={"Gizlilik Politikası"}
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
            text={"Hizmet Şartları"}
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
          text={"Versiyon"}
          trealing={
            <span style={{ fontSize: ".85rem", fontWeight: "300" }}>
              2.0.9+209
            </span>
          }
        />

        <UserDeleteButton onClick={() => setShowOverflow(true)} />
      </div>
      {showOverflow && (
        <FixedOverflow blur={"2px"}>
          <div
            style={{
              width: "400px",
              backgroundColor: colors.backGround3,
              padding: "1rem",
              borderRadius: "12px",
            }}
          >
            <VerifyOtp smsCode={smsCode} setSmsCode={setSmsCode} />
          </div>

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
                  left: "-15px",
                  top: "-15px",
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
