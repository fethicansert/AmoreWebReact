import React, { useEffect, useRef, useState } from "react";
import UserSettingsButton from "../components/user_settings_button";
import { CrossCloseIcon } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import { axiosAmore } from "../../../api/axios";
import { ClipLoader } from "react-spinners";
import UserBlockPopup from "../components/user_block_popup";
import { useOutletContext } from "react-router-dom";
import UserProfileHeader from "../components/user_profile_header";

const UserBlockedUsers = () => {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [blockedUsersLoading, setBlockedUsersLoading] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isUnBlocking, setIsUnBlocking] = useState(false);
  const blockedUserRef = useRef();

  const { userRightColumnRef } = useOutletContext();

  useEffect(() => {
    getBlockedUser();

    //Cleanup
    return () => {
      if (userRightColumnRef.current)
        userRightColumnRef.current.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className="blocked-users">
      <UserProfileHeader />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "15px",
          marginTop: "2rem",
        }}
      >
        {blockedUsersLoading ? (
          <div
            style={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ClipLoader color={colors.brand1} />
          </div>
        ) : blockedUsers.length > 0 ? (
          blockedUsers.map((blockedUser) => (
            <UserSettingsButton
              onClick={() => handleShowPopup(blockedUser)}
              key={blockedUser.id}
              width={"100%"}
              height={"53px"}
              trealing={
                <CrossCloseIcon
                  color={colors.brand1}
                  width="22px"
                  height="22px"
                />
              }
              leading={
                <img
                  src={blockedUser.photos[0].url}
                  width={35}
                  height={35}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: ".2rem",
                  }}
                />
              }
              text={blockedUser.name}
            />
          ))
        ) : (
          <p style={{ fontSize: ".95rem" }}>
            Engellenmiş kullanıcı bulunmuyor.
          </p>
        )}

        {showPopup && (
          <UserBlockPopup
            user={blockedUserRef.current}
            onClose={handleClosePopup}
            loading={isUnBlocking}
            onYes={() => unBlockUser(blockedUserRef.current.id)}
            bottom={`-${userRightColumnRef?.current?.scrollTop}px`}
          />
        )}
      </div>
    </div>
  );

  function handleClosePopup() {
    userRightColumnRef.current.style.overflow = "scroll";
    setShowPopup(false);
  }

  function handleShowPopup(blockedUser) {
    console.log();

    blockedUserRef.current = blockedUser;
    userRightColumnRef.current.style.overflow = "hidden";
    setShowPopup(true);
  }

  async function unBlockUser(userId) {
    setIsUnBlocking(true);
    try {
      const response = await axiosAmore.post(
        "user/unblock",
        { userId },
        { useAuth: true }
      );
      if (response.status === 200) {
        setBlockedUsers((prev) => prev.filter((user) => user.id !== userId));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsUnBlocking(false);
      setShowPopup(false);
      blockedUserRef.current = {};
    }
  }

  async function getBlockedUser() {
    setBlockedUsersLoading(true);
    try {
      const response = await axiosAmore.get("user/blocks", { useAuth: true });
      setBlockedUsers(response.data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setBlockedUsersLoading(false);
    }
  }
};

export default UserBlockedUsers;
