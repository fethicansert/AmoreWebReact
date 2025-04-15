import React, { useState } from "react";
import RegisterUserPhoto from "../../register/comps/register_user_photo";
import { useAuth } from "../../../hooks/use_auth";
import InputContainer from "../../../copmonents/input_container";
import { StarIcon, UserIcon } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import FlexBox from "../../../copmonents/flex_box.jsx";
const UserProfile = () => {
  const { auth } = useAuth();
  const [name, setName] = useState('');
  const [day,setDay] = useState('');
  const [month,setMonth] = useState('');
  const [year,setYear] = useState('');
  return (
    <div className="profile">
      <div className="profile-user-photos">
        <div className="profile-user-profile-photo">
          <RegisterUserPhoto img={auth?.photos[0].url} />
          <p>{auth.name}</p>
        </div>

        <div className="profile-user-photos-wrapper">
          <RegisterUserPhoto img={auth?.photos?.[1]?.url} />
          <RegisterUserPhoto img={auth?.photos?.[2]?.url} />
          <RegisterUserPhoto img={auth?.photos?.[3]?.url} />
          <RegisterUserPhoto img={auth?.photos?.[4]?.url} />
          <RegisterUserPhoto img={auth?.photos?.[5]?.url} />
        </div>

        <div
          width={"100%"}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px 15px",
            marginTop: "2.5rem",
          }}
        >
          <InputContainer
            value={name}
            setValue={setName}
            containerStyle={{ flex: "1", minWidth: "250px" }}
            width="100%"
            height="50px"
            inputClass={"user-profile-input"}
            title={"İsim"}
            titleStyle={{ marginLeft: ".5rem" }}
            leading={
              <UserIcon
                width={20}
                height={20}
                color={colors.fadedText}
                className=""
              />
            }
            placeholder="Place Holder"
            border={`1px solid ${colors.borderColor1}`}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px 0",
              flex: "1",
              justifyContent: "flex-end",
              minWidth: "250px",
            }}
          >
            <h3 style={{ fontSize: ".9rem", fontWeght: "600" }}>Doğum Günü</h3>
            <div
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <InputContainer
                containerStyle={{ flex: "1" }}
                height="50px"
                width="100%"
                inputClass={"user-profile-input user-profile-input-date"}
                placeholder="MM"
                border={`1px solid ${colors.borderColor1}`}
              />
              <InputContainer
                containerStyle={{ flex: "1" }}
                height="50px"
                width="100%"
                inputClass={"user-profile-input user-profile-input-date"}
                placeholder="DD"
                border={`1px solid ${colors.borderColor1}`}
              />
              <InputContainer
                containerStyle={{ flex: "1" }}
                height="50px"
                width="100%"
                inputClass={"user-profile-input user-profile-input-date"}
                titleStyle={{ marginLeft: ".5rem" }}
                placeholder="YYYY"
                border={`1px solid ${colors.borderColor1}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
