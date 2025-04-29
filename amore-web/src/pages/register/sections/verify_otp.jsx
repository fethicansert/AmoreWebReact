import React, { useEffect, useRef, useState } from "react";
import OtpIpnut from "../comps/phone_input";
import { createOtp } from "../../../utils/functions";
import FlexBox from "../../../copmonents/flex_box";
import { colors } from "../../../utils/theme";
import { BsArrowRepeat } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import OtpInput from "../comps/phone_input";

const VerifyOtp = ({ smsCode, setSmsCode, phone }) => {
  //STATE && HOOKS
  const [cooldown, setCooldown] = useState(null);
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();
  const interval = useRef();
  const digit2Ref = useRef();
  const digit3Ref = useRef();
  const digit4Ref = useRef();

  //IF iterval still working clear interval on Unmounted State!
  useEffect(() => {
    const clear = () => clearInterval(interval.current);
    return clear;
  }, []);

  //UI
  return (
    <div className="register-verify">
      <div className="verify-container">
        <OtpInput
          autoFocus={true}
          value={smsCode.digit1}
          setValue={setSmsCode}
          digit="digit1"
          nextRef={digit2Ref}
        />

        <OtpInput
          value={smsCode.digit2}
          setValue={setSmsCode}
          digit="digit2"
          nextRef={digit3Ref}
          autoFocus={false}
          ref={digit2Ref}
        />

        <OtpInput
          value={smsCode.digit3}
          setValue={setSmsCode}
          digit="digit3"
          nextRef={digit4Ref}
          autoFocus={false}
          ref={digit3Ref}
        />

        <OtpInput
          value={smsCode.digit4}
          setValue={setSmsCode}
          digit="digit4"
          autoFocus={false}
          ref={digit4Ref}
        />
      </div>

      <FlexBox gap="0 7px" margin={"1rem 0 0 0"}>
        <span
          className="register-verify-send-again-button"
          onClick={handleSendAgain}
        >
          {t("REGISTER.VERIFY.SEND_AGAIN_BUTTON")}
          <BsArrowRepeat color={colors.brand1} />
        </span>

        {!cooldown && success && (
          <span
            style={{
              textDecoration: "underline",
              color: colors.darkText,
              fontSize: ".8rem",
            }}
          >
            Yeni doğrulama kodu gönderildi.
          </span>
        )}

        {cooldown && (
          <span style={{ color: colors.darkText, fontSize: ".8rem" }}>
            {cooldown}'saniye beklemelisin
          </span>
        )}
      </FlexBox>
    </div>
  );

  //FUNCTIONS

  //TRY to create-get new otp code if otp has cooldown show cooldown user should wait!
  //IF cooldown show set interval when cooldown finished clear Interva!
  async function handleSendAgain() {
    if (cooldown) return;
    const request = await createOtp({ phone: `+${phone}` });
    if (request.status === 400) {
      setCooldown(request.cooldown);
      setSuccess(false);
      interval.current = setInterval(() => {
        console.log("CoolDown Working...");
        setCooldown((prev) => {
          if (parseInt(prev) <= 1) {
            clearInterval(interval.current);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
    if (request.status === 200) {
      setSuccess(true);
      setCooldown(null);
    }
  }
};

export default VerifyOtp;
