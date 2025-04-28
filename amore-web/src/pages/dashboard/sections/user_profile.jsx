import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../hooks/use_auth";
import InputContainer from "../../../copmonents/input_container";
import {
  JobIcon,
  LocationIcon,
  PenIcon,
  SchollIcon,
  UserIcon,
} from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import DropdownList from "../../../copmonents/dropdown_list";
import { useAppData } from "../../../hooks/use_add_data";
import Flag from "react-flagkit";
import FlexBox from "../../../copmonents/flex_box";
import { useOutletContext } from "react-router-dom";
import HobbieCheckBox from "../../register/comps/hobbie_checkbox";
import CustomTextArea from "../../../copmonents/custom_textarea";
import UserProfileDate from "../components/user_profile_date";
import RegisterUserPhoto from "../../register/comps/register_user_photo";
import BasicButton from "../../../copmonents/basic_button";
import UserProfileHeader from "../components/user_profile_header";
import { axiosAmore } from "../../../api/axios";

const UserProfile = () => {
  //CONTEXT
  const { userRightColumnRef } = useOutletContext();
  const { auth } = useAuth();
  const {
    appData: { locations, interests },
    getUserInterests,
  } = useAppData();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [name, setName] = useState(auth.name);
  const [job, setJob] = useState("");
  const [school, setSchool] = useState("");
  const [bio, setBio] = useState("");
  const [userImages, setUserImages] = useState(
    auth?.photos.map((photo) => ({ ...photo }))
  );
  const [selectedInterests, setSelectedInterests] = useState(
    getUserInterests(auth?.interests?.map((interest) => interest.id))
  );
  const [selectedDate, setSelectedDate] = useState(new Date(auth.birthday));

  //Burada refresh attiktan sonra gelecek datalar icin duzenleme yap locations cekilmeden onceki durum nasil olacak belirle!!!
  const userCountry =
    locations?.length > 0
      ? {
          ...locations?.find((location) => location?.id === auth.country.id),
          state: auth.country.state.name,
          stateId: auth.country.state.id,
        }
      : {};
  const [location, setLocation] = useState({
    country: userCountry.name,
    countryCode: userCountry?.countryCode,
    states: userCountry?.states || [],
    state: locations[0]?.states[0].name,
    stateId: undefined,
  });

  const [showCountry, setShowCountry] = useState(false);
  const [showStates, setShowStates] = useState(false);
  const [showInterests, setShowInterests] = useState(false);
  const [warnings, setWarnings] = useState({
    interestWarning: "",
  });

  console.log(userImages);

  // const renderedCountries = useMemo(() => locations.map((location, index) => (
  //     <FlexBox
  //       onClick={() => handleSelectCountry(index)}
  //       key={index}
  //       className='dropdown-item'
  //       gap='0 10px'
  //       width={'100%'}>
  //       <Flag country={location?.countryCode} />
  //       {location?.name}
  //     </FlexBox>
  //   )), [locations]);

  //   const renderedStates = useMemo(() => location.states?.map((state, index) => (
  //     <FlexBox
  //       onClick={() => handleSelectState(index)}
  //       key={index}
  //       className='dropdown-item'
  //       gap='0 10px'
  //       width={'100%'}>
  //       {state.name}
  //     </FlexBox>
  //   )), [location.states]);

  //Locations can empty if locations change and has data setLocation with new data
  useEffect(() => {
    if (locations?.length > 0) {
      setLocation({
        country: userCountry?.name,
        countryCode: userCountry?.countryCode,
        states: userCountry.states,
        state: userCountry.state,
      });
    }
  }, [locations]);

  useEffect(() => {
    if (interests?.length > 0) {
      setSelectedInterests(
        getUserInterests(auth?.interests?.map((interest) => interest.id))
      );
    }
  }, [interests]);

  return (
    <div className="profile-wrapper">
      <div className="profile">
        <UserProfileHeader />

        {/* //USER PHOTOS */}
        <div className="profile-user-photos">
          <div className="profile-user-profile-photo">
            <RegisterUserPhoto
              handleImageChange={() => handleImageChange}
              handleDeleteImage={() => handleDeleteImage(0)}
              img={auth?.photos[0].url}
            />
            <p>{auth.name}</p>
          </div>

          <div className="profile-user-photos-wrapper">
            {Array(5)
              .fill(5)
              .map((_, index) => (
                <RegisterUserPhoto
                  key={index}
                  handleDeleteImage={() => handleDeleteImage(index)}
                  handleImageChange={handleImageChange}
                  index={index + 1}
                  img={userImages?.[index + 1]?.url}
                />
              ))}
          </div>
        </div>

        {/* //TEXT INPUTS */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "30px 15px",
            marginTop: "3.5rem",
          }}
        >
          <InputContainer
            value={name}
            setValue={setName}
            containerStyle={{ flex: "1", minWidth: "250px" }}
            width="100%"
            height="53px"
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
            placeholder={"Isim"}
            border={`1px solid ${colors.borderColor1}`}
          />

          <UserProfileDate
            handleShowDatePicker={handleShowDatePicker}
            showDatePicker={showDatePicker}
            setShowDatePicker={setShowDatePicker}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

        {/* //TEXT AREA */}
        <CustomTextArea
          icon={<PenIcon />}
          title={"Biyografi"}
          value={bio}
          onChange={setBio}
          placeholder={"Kendinizden Bahsedin"}
          containerStyle={{ marginTop: "2rem" }}
        />

        {/* //DROP DOWNS */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "30px 15px",
            marginBlock: "2.5rem 0",
          }}
        >
          {locations.length > 0 && (
            <>
              <DropdownList
                title={"Ülke"}
                titleStyle={{
                  fontSize: ".9rem",
                  fontWeight: "600",
                  marginLeft: ".5rem",
                }}
                textStyle={{ fontSize: ".9rem" }}
                wrapperStyle={{ marginBlock: "0", flex: "1" }}
                dropdownStyle={{ height: "53px" }}
                onDropDown={showCountryList}
                showDropdown={showCountry}
                selectedItem={location.country}
                icon={<Flag country={location.countryCode} />}
              >
                {locations.map((location, index) => (
                  <FlexBox
                    onClick={() => handleSelectCountry(index)}
                    key={index}
                    className="dropdown-item"
                    gap="0 10px"
                    width={"100%"}
                  >
                    <Flag country={location?.countryCode} />
                    {location?.name}
                  </FlexBox>
                ))}
              </DropdownList>

              <DropdownList
                title={"Şehir"}
                titleStyle={{
                  fontSize: ".9rem",
                  fontWeight: "600",
                  marginLeft: ".5rem",
                }}
                textStyle={{ fontSize: ".9rem" }}
                wrapperStyle={{ marginBlock: "0", flex: "1" }}
                dropdownStyle={{ height: "53px" }}
                onDropDown={showStateList}
                showDropdown={showStates}
                selectedItem={location.state || "Şehir Bulunmuyor"}
                icon={
                  <LocationIcon
                    width="24"
                    height="24"
                    color={colors.darkText}
                  />
                }
              >
                {location.states.map((state, index) => (
                  <FlexBox
                    onClick={() => handleSelectState(index)}
                    key={index}
                    className="dropdown-item"
                    gap="0 10px"
                    width={"100%"}
                  >
                    {state.name}
                  </FlexBox>
                ))}
              </DropdownList>
            </>
          )}
        </div>

        {/* //TEXT INPUTS */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "30px 15px",
            marginTop: "2.5rem",
          }}
        >
          <InputContainer
            value={job}
            setValue={setJob}
            containerStyle={{ flex: "1", minWidth: "250px" }}
            width="100%"
            height="53px"
            inputClass={"user-profile-input"}
            title={"Meslek"}
            titleStyle={{ marginLeft: ".5rem" }}
            leading={
              <JobIcon
                width={20}
                height={20}
                color={colors.fadedText}
                className=""
              />
            }
            placeholder="Meslek"
            border={`1px solid ${colors.borderColor1}`}
          />

          <InputContainer
            value={school}
            setValue={setSchool}
            containerStyle={{ flex: "1", minWidth: "250px" }}
            width="100%"
            height="53px"
            inputClass={"user-profile-input"}
            title={"Okul"}
            titleStyle={{ marginLeft: ".5rem" }}
            leading={
              <SchollIcon
                width={20}
                height={20}
                color={colors.fadedText}
                className=""
              />
            }
            placeholder="Okul"
            border={`1px solid ${colors.borderColor1}`}
          />
        </div>

        <div style={{ marginTop: "2.5rem" }} className="user-profile-interests">
          <FlexBox
            onClick={handleEditInterest}
            width={"100%"}
            justifyContent="space-between"
            style={{ marginBottom: "10px", cursor: "pointer" }}
          >
            <h3
              style={{
                fontSize: ".9rem",
                fontWeight: "600",
                marginLeft: ".5rem",
              }}
            >
              İlgi alanlarınız
            </h3>
            <div
              style={{
                display: "flex",
                gap: "0 2px",
                alignItems: "center",
                color: colors.brand1,
                fontSize: ".9rem",
              }}
            >
              <PenIcon color={colors.brand1} />
              {!showInterests ? "Düzenle" : "Tamamla"}
            </div>
          </FlexBox>

          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
            className="user-profile-interests-wrapper"
          >
            {!showInterests
              ? selectedInterests.map((interest, index) => (
                  <HobbieCheckBox
                    checkboxStyle={{ height: "53px" }}
                    key={index}
                    interest={interest}
                    isSelectable={false}
                    isActive={false}
                  />
                ))
              : interests.map((interest, index) => (
                  <HobbieCheckBox
                    checkboxStyle={{ height: "53px" }}
                    key={index}
                    interest={interest}
                    isSelectable={true}
                    onClick={() => handleInterestClick(interest)}
                    isActive={selectedInterests.some(
                      (selectedInterest) =>
                        selectedInterest._id === interest._id
                    )}
                  />
                ))}
          </div>
          {warnings.interestWarning && (
            <p className="error-text" style={{ margin: "1rem 0 0 .5rem" }}>
              {warnings.interestWarning}
            </p>
          )}
        </div>
      </div>
      <div className="user-profile-buttons">
        <BasicButton
          height={"53px"}
          width={"110px"}
          backgroundColor={colors.negativeBlack}
          borderRadius={"12px"}
        >
          İptal Et
        </BasicButton>

        <BasicButton
          onClick={updateUser}
          height={"53px"}
          width={"170px"}
          backgroundColor={colors.brand1}
          borderRadius={"12px"}
        >
          Değişikleri Kaydet
        </BasicButton>
      </div>
    </div>
  );

  async function updateUser() {
    const formData = new FormData();

    const photoMap = userImages.map((image) => {
      return {
        isFile: image.isFile === true,
        uri: image.isFile ? "" : image.url,
        filename: image.filename || "",
      };
    });

    console.log(photoMap);

    formData.append("photoMap", JSON.stringify(photoMap));

    userImages.forEach((image) => {
      if (image.isFile) {
        console.log(image.file);

        formData.append(`files`, image.file, image.filename);
      }
    });

    formData.append("name", name);

    try {
      const response = await axiosAmore.post("/user/edit_profile/", formData, {
        useAuth: true,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  function handleEditInterest() {
    if (selectedInterests.length < 3) {
      setWarnings((prev) => ({
        ...prev,
        interestWarning: "En az 3 ilgi alanı seçmelisin!",
      }));
    } else {
      setShowInterests((prev) => !prev);
      setWarnings((prev) => ({ ...prev, interestWarning: "" }));
    }
  }

  function handleInterestClick(interest) {
    setWarnings((prev) => ({ ...prev, interestWarning: "" }));

    !selectedInterests.some(
      (selectedInterest) => selectedInterest._id === interest._id
    )
      ? selectedInterests.length > 4
        ? setWarnings((prev) => ({
            ...prev,
            interestWarning: "En fazla 5 ilgi alanı seçebilirsin!",
          }))
        : setSelectedInterests((prev) => [...prev, interest])
      : setSelectedInterests((prev) =>
          prev.filter(
            (selectedInterest) => selectedInterest._id !== interest._id
          )
        );
  }

  function handleSelectCountry(index) {
    setLocation({
      country: locations[index].name,
      countryCode: locations[index].countryCode,
      states: locations[index].states,
      state: locations[index]?.states?.[0]?.name || "",
      countryId: locations[index]?.id,
      stateId: locations[index]?.states?.[0]?.id || "",
    });
  }

  function handleSelectState(index) {
    setLocation((prev) => ({
      ...prev,
      state: location.states[index].name,
      stateId: location.states[index].id,
    }));
  }

  //200ms bekliyoruz dropdown height doğru almak için.
  //Bekleme yapmsak ilk anda bir dropdow height olmadığı için scroll olmayakcaktır.
  function showStateList() {
    if (!location.states.length > 0) return;
    setShowStates((prev) => !prev);
    setTimeout(() => {
      userRightColumnRef.current.scroll({
        top: userRightColumnRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 200);
  }

  //200ms bekliyoruz dropdown height doğru almak için.
  //Bekleme yapmsak ilk anda bir dropdow height olmadığı için scroll olmayakcaktır.
  function showCountryList() {
    setShowCountry((prev) => !prev);
    setTimeout(() => {
      userRightColumnRef.current.scroll({
        top: userRightColumnRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 200);
  }

  function handleShowDatePicker() {
    setShowDatePicker((prev) => !prev);
    userRightColumnRef.current.scroll({
      top: 300,
      behavior: "smooth",
    });
  }

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = function () {
        setUserImages(function (prev) {
          return [
            ...prev,
            { isFile: true, url: reader.result, file, filename: file.name },
          ];
        });
      };
      reader.readAsDataURL(file);
    }
  }

  function handleDeleteImage(index) {
    console.log(index);

    const deletedImages = userImages.filter(function (img, id) {
      if (id === index) {
        return undefined;
      }
      return img;
    });

    setUserImages(deletedImages);
  }
};

export default UserProfile;
