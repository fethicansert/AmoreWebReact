import React from "react";
import { useOutletContext } from "react-router-dom";
import UserNewTicket from "../components/user_new_ticket";

const UserSupportNew = () => {
  //CONTEXT
  const {
    error,
    title,
    setTitle,
    question,
    setQuestion,
    questionImage,
    setQuestionImage,
  } = useOutletContext();

  return (
    <div>
      <UserNewTicket
        title={title}
        setTitle={setTitle}
        question={question}
        setQuestion={setQuestion}
        questionImage={questionImage}
        setQuestionImage={setQuestionImage}
      />
      {error && (
        <p style={{ marginTop: "1.25rem" }} className="error-text">
          {error}
        </p>
      )}
    </div>
  );
};

export default UserSupportNew;
