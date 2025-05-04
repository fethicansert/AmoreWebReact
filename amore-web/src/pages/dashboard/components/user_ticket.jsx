import React, { useState } from "react";
import {
  ArrowDownIcon,
  CrossCloseIcon,
  HeadphoneIcon,
} from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import BasicButton from "../../../copmonents/basic_button";
import UserNewTicket from "./user_new_ticket";
import FlexBox from "../../../copmonents/flex_box";
import FixedOverflow from "../../../copmonents/fixed_overflow";
import { axiosAmore } from "../../../api/axios";

const UserTicket = ({ ticket, setTickets }) => {
  const [showTicket, setShowTicket] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const [question, setQuestion] = useState("");
  const [questionImage, setQuestionImage] = useState({
    image: "",
    imageFile: "",
  });

  const [messageImage, setMessageImage] = useState("");

  // const [questionImage, setQuestionImage] = useState();

  const placeHolderTicket = {
    sender: "admin",
    message: "Müşteri Hizmetleri en kısa sürede dönüş yapacaktır.",
  };

  return (
    <div className="user-ticket-wrapper">
      {messageImage && (
        <FixedOverflow>
          <div
            style={{ width: "95%", maxWidth: "300px", position: "relative" }}
          >
            <div
              className="center"
              style={{
                width: "25px",
                height: "25px",
                background: colors.negativeBlack,
                borderRadius: "50%",
                position: "absolute",
                top: "-12.5px",
                right: "-12.5px",
                cursor: "pointer",
              }}
            >
              <CrossCloseIcon
                width="20"
                height="20"
                onClick={() => {
                  setMessageImage("");
                  userRightColumnRef.current.style.overflow = "scroll";
                }}
              />
            </div>
            <img style={{ width: "100%", height: "100%" }} src={messageImage} />
          </div>
        </FixedOverflow>
      )}

      <div className="user-ticket">
        <div
          className="user-ticket-header"
          onClick={() => {
            setShowTicket((prev) => !prev);
            setShowAnswer(false);
          }}
        >
          <h4>{ticket?.title}</h4>

          <div className="user-ticket-header-group">
            <span className="user-ticket-time">
              {formatFullDate(ticket?.updatedDate || ticket?.createdDate)}
            </span>

            <ArrowDownIcon
              width="20px"
              height="20px"
              color={colors.iconColor}
              style={{
                transform: showTicket ? "rotateX(180deg)" : "rotateX(0deg)",
                transition: "transform 150ms ease",
              }}
            />
          </div>
        </div>

        {showTicket && (
          <div className="user-ticket-content">
            {ticket?.messages.map((message, index) => (
              <TicketMessage
                hideTime={index === 0}
                key={index}
                message={message}
                setMessageImage={setMessageImage}
              />
            ))}

            {ticket?.messages.length === 1 && (
              <TicketMessage message={placeHolderTicket} hideTime={true} />
            )}
          </div>
        )}
      </div>

      {showAnswer && showTicket && (
        <UserNewTicket
          hideTitle={true}
          question={question}
          setQuestion={setQuestion}
          questionImage={questionImage}
          setQuestionImage={setQuestionImage}
        />
      )}

      {showTicket && ticket.status === "closed" && (
        <BasicButton
          onClick={() =>
            !showAnswer
              ? setShowAnswer((prev) => !prev)
              : sendMessageAnswer(ticket._id)
          }
          height={"53px"}
          width={"120px"}
          borderRadius={"12px"}
          backgroundColor={colors.brand1}
          style={{ justifySelf: "flex-end", marginTop: ".5rem" }}
        >
          {showAnswer ? "Gönder" : "Cevap Yaz"}
        </BasicButton>
      )}
    </div>
  );

  function TicketMessage({ message, hideTime }) {
    const isAdmin = message.sender === "admin";
    return (
      <div
        style={{
          backgroundColor: isAdmin ? colors.backGround2 : colors.backGround3,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "0 12px",
          alignItems: "start",
        }}
        className="user-ticket-content-message"
      >
        <div style={{ display: "grid" }}>
          <div>
            {isAdmin && (
              <FlexBox gap="0 7px" style={{ marginBottom: "1rem" }}>
                <HeadphoneIcon color={colors.brand1} />
                <h4>Amore - Müşteri Hizmetleri</h4>
              </FlexBox>
            )}
            <p>{message.message}</p>
          </div>

          {message?.imageUrl && (
            <div
              style={{
                width: "25%",
                minWidth: "200px",
                aspectRatio: "1 / 1",
                marginTop: "1rem",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "12px",
                }}
                src={message?.imageUrl}
              />
            </div>
          )}
        </div>

        {!hideTime && (
          <span className="user-ticket-time">
            {formatFullDate(message.createdDate)}
          </span>
        )}
      </div>
    );
  }

  function handleShowMessageImage(image) {
    setMessageImage(image);
  }

  async function sendMessageAnswer(ticketId) {
    if (!question) return;

    const formData = new FormData();

    formData.append("message", question);
    formData.append("supportTicketId", ticketId);

    if (questionImage.imageFile) {
      formData.append(
        `file`,
        questionImage.imageFile,
        questionImage.imageFile.name
      );
    }

    try {
      const response = await axiosAmore.post(
        "user/v2/support_message",
        formData,
        { useAuth: true }
      );
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket._id === response.data.data._id ? response.data.data : ticket
        )
      );
      setShowAnswer(false);
    } catch (e) {
      console.log(e);
    }
  }

  function formatFullDate(createdDate) {
    const date = new Date(createdDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Aylar 0-indexli
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes} / ${day}.${month}.${year}`;
  }
};

export default UserTicket;
