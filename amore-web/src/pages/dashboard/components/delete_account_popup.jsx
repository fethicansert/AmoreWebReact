import React, { useRef, useState } from "react";
import { DeleteAccountIcon, PenIcon } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import CustomTextArea from "../../../copmonents/custom_textarea";
import BasicButton from "../../../copmonents/basic_button";
import OtpInput from "../../register/comps/phone_input";
import { axiosAmore } from "../../../api/axios";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../hooks/use_auth";
import SimpleLoading from "./simple_loading";

const DeleteAccountPopup = ({ otpId, closePopup }) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [smsCode, setSmsCode] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });

  const [reason, setReason] = useState();
  const [error, setError] = useState("");

  const digit2Ref = useRef();
  const digit3Ref = useRef();
  const digit4Ref = useRef();

  //CONTEXT
  const { t } = useTranslation();
  const { setAuth } = useAuth();

  return deleteLoading ? (
    <SimpleLoading text={"Hesabınız siliniyor lütfen bekleyin."} />
  ) : (
    <div
      className="delete-account"
      style={{
        animation: "fade 250ms ease",
        display: "grid",
        padding: "2rem",
        background: colors.backGround3,
        borderRadius: "16px",
        justifyItems: "center",
        width: "100%",
        maxWidth: "370px",
        border: `1px solod ${colors.borderColor1}`,
      }}
    >
      <DeleteAccountIcon width="35px" height="35px" />
      <h4 style={{ fontWeight: 600, fontSize: "1.05rem", marginTop: ".2rem" }}>
        Hesabımı Sil
      </h4>
      <p
        style={{
          marginTop: ".3rem",
          maxWidth: "160px",
          textAlign: "center",
          color: colors.lowFadedText,
          fontWeight: 300,
          fontSize: ".9rem",
        }}
      >
        Cep telefonunuza bir kod gönderildi.
      </p>

      <div
        style={{
          display: "flex",
          height: "65px",
          gap: "0 10px",
          marginTop: "1.5rem",
        }}
      >
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

      <CustomTextArea
        value={reason}
        onChange={setReason}
        icon={<PenIcon />}
        height="120px"
        placeholder="Kısa Açıklama"
        title={"Hesabını neden silmek istiyorsun?"}
        titleStyle={{ color: colors.lowFadedText, fontWeight: 300 }}
        containerStyle={{ marginTop: "1.5rem" }}
      />

      <BasicButton
        onClick={verifyOtp}
        width={"100%"}
        height={"53px"}
        borderRadius={"12px"}
        backgroundColor={colors.brand1}
        style={{ marginTop: "1.5rem" }}
      >
        Hesabımı Sil
      </BasicButton>

      {error && (
        <p
          className="error-text"
          style={{
            marginTop: "1rem",
            justifySelf: "self-start",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );

  async function verifyOtp() {
    if (
      !reason ||
      !smsCode.digit1 ||
      !smsCode.digit2 ||
      !smsCode.digit3 ||
      !smsCode.digit4
    )
      return setError("Bütün boşlukları Doldurmalısın!");

    const code =
      smsCode.digit1 + smsCode.digit2 + smsCode.digit3 + smsCode.digit4;

    setDeleteLoading(true);

    try {
      const verifyResponse = await axiosAmore.post("/otp/verify", {
        id: otpId,
        smsCode: code,
      });

      console.log(verifyResponse);

      if (verifyResponse?.data?.data?.status) {
        const deleteResponse = await axiosAmore.post(
          "/user/delete",
          { otpId, otpCode: code, reason },
          {
            useAuth: true,
          }
        );
        console.log(deleteResponse);
        setAuth({});
        localStorage.clear("fcmToken");
      }
    } catch (e) {
      const message = e?.response?.data?.response?.message;
      if (message) {
        setError(t(`ERRORS.${message}`));
      } else {
        setError(t("ERRORS.UNEXPECTED_ERROR.TITLE"));
      }
    } finally {
      setDeleteLoading(false);
    }
  }
};

export default DeleteAccountPopup;

// const response = e?.response?.data?.response;
// if (response) {
//   setError(t("ERRORS.UNEXPECTED_ERROR.TITLE"));
// } else {
//   setError(t("ERRORS.UNEXPECTED_ERROR.TITLE"));
// }
