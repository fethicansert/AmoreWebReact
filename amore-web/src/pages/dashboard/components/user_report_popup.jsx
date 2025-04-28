import React, { useEffect, useState } from "react";
import FixedOverflow from "../../../copmonents/fixed_overflow";
import { PenIcon, ReportIcon } from "../../../assets/svg/svg_package";
import CustomTextArea from "../../../copmonents/custom_textarea";
import BasicButton from "../../../copmonents/basic_button";
import { colors } from "../../../utils/theme";
import FlexBox from "../../../copmonents/flex_box";
import { axiosAmore } from "../../../api/axios";
import { useAuth } from "../../../hooks/use_auth";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import SimpleLoading from "./simple_loading";

const reportReasons = [
  "SPAM",
  "FRAUD",
  "VIOLENCE",
  "INAPPROPRIATE",
  "FAKE",
  "OTHER",
];

const UserReportPopup = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedReason, setSelectedReason] = useState(reportReasons[0]);
  const [error, setError] = useState("");
  const { auth } = useAuth();
  const { t, _ } = useTranslation();
  useEffect(() => {
    if (error) setError("");
  }, [message]);

  return (
    <FixedOverflow color="rgba(0, 0, 0, 0.45)">
      {loading ? (
        <SimpleLoading text={t("REPORT.SENDING")} />
      ) : (
        <div className="user-report-popup">
          <ReportIcon width="42px" height="42px" />
          <h3 style={{ fontWeight: "600", marginTop: ".5rem" }}>
            {t("REPORT.TITLE")}
          </h3>
          <p
            style={{
              maxWidth: "180px",
              marginTop: ".3rem",
              color: colors.lowFadedText,
              fontWeight: 300,
              fontSize: ".95rem",
            }}
          >
            {t("REPORT.SUB_TITLE")}
          </p>

          <div
            className="report-radiobox-wrapper"
            style={{
              marginBlock: "1.1rem",
              display: "grid",
              gap: "10px 0",
              justifyItems: "start",
              width: "100%",
            }}
          >
            {reportReasons.map((reason, index) => (
              <UserReportRadio
                key={index}
                onClick={() => setSelectedReason(reason)}
                text={t(`REPORT.REASONS.${reason}`)}
                isSelected={reason === selectedReason}
              />
            ))}
          </div>

          <CustomTextArea
            containerStyle={{ marginBottom: ".5rem" }}
            height="100px"
            value={message}
            onChange={setMessage}
            icon={<PenIcon />}
            placeholder={t("PLACEHOLDERS.SHORT_DESCRIPTION")}
          />

          {error && (
            <p style={{ fontSize: ".85rem" }} className="error-text">
              {error}
            </p>
          )}

          <FlexBox
            width={"100%"}
            gap="0 10px"
            alignItems="center"
            style={{ marginTop: ".5rem" }}
          >
            <BasicButton
              onClick={sendReport}
              borderRadius={"12px"}
              width={"100%"}
              height={"53px"}
              backgroundColor={colors.brand1}
            >
              {t("BUTTONS.SEND")}
            </BasicButton>

            <BasicButton
              onClick={onClose}
              borderRadius={"12px"}
              width={"100%"}
              height={"53px"}
              backgroundColor={colors.negativeBlack}
            >
              {t("BUTTONS.CANCEL")}
            </BasicButton>
          </FlexBox>
        </div>
      )}
    </FixedOverflow>
  );

  async function sendReport() {
    if (!message) return setError("Açıklamayı boş bırakamazsın!");

    setLoading(true);
    try {
      const response = await axiosAmore.post(
        "/user/report",
        { reason: selectedReason.toUpperCase(), message, userId: auth.id },
        { useAuth: true }
      );
      console.log(response);
      onClose();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function UserReportRadio({ text, isSelected, onClick }) {
    return (
      <div
        onClick={onClick}
        className="user-report-radio"
        style={{
          padding: "5px 0",
          cursor: "pointer",
          fontSize: ".88rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0 8px",
          fontWeight: isSelected ? 600 : 400,
          color: isSelected ? colors.darkText : colors.fadedText,
        }}
      >
        <div
          className="center"
          style={{
            width: "17px",
            height: "17px",
            borderRadius: "50%",
            border: `1px solid ${
              isSelected ? colors.brand1 : colors.borderColor1
            }`,
          }}
        >
          {isSelected && (
            <div
              style={{
                width: "11px",
                height: "11px",
                borderRadius: "50%",
                backgroundColor: colors.brand1,
              }}
            ></div>
          )}
        </div>
        {text}
      </div>
    );
  }
};

export default UserReportPopup;
