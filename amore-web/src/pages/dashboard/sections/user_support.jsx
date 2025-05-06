import React, { useState } from "react";
import FlexBox from "../../../copmonents/flex_box";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import UserProfileHeader from "../components/user_profile_header";
import BasicButton from "../../../copmonents/basic_button";
import { colors } from "../../../utils/theme";
import { axiosAmore } from "../../../api/axios";
import { useTranslation } from "react-i18next";
import { BeatLoader } from "react-spinners";

const UserSupport = () => {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [questionImage, setQuestionImage] = useState({
    image: "",
    imageFile: "",
  });

  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation().pathname.split("/").slice(-1).pop();

  return (
    <div className="user-support-wrapper">
      <div className="user-support">
        <UserProfileHeader />

        <FlexBox gap="0 18px" style={{ padding: "1.45rem 0" }}>
          <NavLink
            end
            className={({ isActive, _ }) => (isActive ? "active" : "")}
            to={""}
          >
            {t("DASHBOARD.PROFILE.SUPPORT.NEW_QUESTION")}
          </NavLink>

          <NavLink to={"old"}>
            {" "}
            {t("DASHBOARD.PROFILE.SUPPORT.OLD_QUESTIONS")}
          </NavLink>
        </FlexBox>

        <Outlet
          context={{
            submitting,
            error,
            setError,
            title,
            setTitle,
            question,
            setQuestion,
            questionImage,
            setQuestionImage,
          }}
        />
      </div>

      {location !== "old" && (
        <div className="user-profile-buttons">
          <BasicButton
            onClick={sendTicket}
            height={"53px"}
            width={"170px"}
            backgroundColor={colors.brand1}
            borderRadius={"12px"}
          >
            {submitting ? (
              <BeatLoader color={colors.backGround3} size={8} />
            ) : (
              t("DASHBOARD.PROFILE.SUPPORT.SEND_QUESTION_BUTTON")
            )}
          </BasicButton>
        </div>
      )}
    </div>
  );

  async function sendTicket() {
    if (!title || !question)
      return setError("Başlık veya Açıklamayı boş bırakamazsın.");

    const formData = new FormData();

    formData.append("title", title);
    formData.append("question", question);
    formData.append("deviceId", "f1ba0831efd56528");

    if (questionImage.imageFile) {
      formData.append(
        `file`,
        questionImage.imageFile,
        questionImage.imageFile.name
      );
    }

    setSubmitting(true);

    try {
      const response = await axiosAmore.post("/user/v2/support", formData, {
        useAuth: true,
      });
      setTitle("");
      setQuestion("");
      setQuestionImage("");
      navigate("old");
    } catch (e) {
      const message = e.response.data.response.message;
      if (message) return setError(t(`ERRORS.${message}`));

      setError(t(`ERRORS.UNEXPECTED_ERROR.TITLE`));
    } finally {
      setSubmitting(false);
    }
  }
};

export default UserSupport;
