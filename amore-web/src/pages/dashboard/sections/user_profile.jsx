import React, { useEffect, useRef, useState } from "react";
import RegisterUserPhoto from "../../register/comps/register_user_photo";
import { useAuth } from "../../../hooks/use_auth";
import InputContainer from "../../../copmonents/input_container";
import { JobIcon, LocationIcon, PenIcon, SchollIcon, UserIcon } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import DropdownList from "../../../copmonents/dropdown_list";
import { useAppData } from "../../../hooks/use_add_data";
import Flag from "react-flagkit";
import FlexBox from "../../../copmonents/flex_box";
import { useOutletContext } from "react-router-dom";
import HobbieCheckBox from "../../register/comps/hobbie_checkbox";


const UserProfile = () => {

    //CONTEXT
    const { userRightColumnRef } = useOutletContext();
    const { auth } = useAuth();
    const { appData: { locations, interests } } = useAppData();

    const { getUserInterests } = useAppData();

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [school, setSchool] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [bio, setBio] = useState('');
    const [showCountry, setShowCountry] = useState(false);
    const [showStates, setShowStates] = useState(false);
    const [showInterests, setShowInterests] = useState(false);
    const [selectedInterests, setSelectedInterests] = useState(getUserInterests(auth?.interests?.map(interest => interest.id)));

    const [location, setLocation] = useState({ country: locations[0]?.name, countryCode: locations[0]?.countryCode, states: locations[0]?.states, state: locations[0]?.states[0].name, stateId: undefined })


    //Locations can empty if locations change and has data setLocation with new data
    useEffect(() => {
        if (locations?.length > 0) {
            setLocation({
                country: locations?.[0]?.name,
                countryCode: locations?.[0]?.countryCode,
                states: locations?.[0]?.states,
                state: locations?.[0]?.states[0]?.name,
            });
        }
    }, [locations])

    useEffect(() => {
        if (interests?.length > 0) {
            setSelectedInterests(getUserInterests(auth?.interests?.map(interest => interest.id)))
        }
    }, [interests])


    //REFS
    const textareaRef = useRef();

    return (
        <div className="profile" >
            {/* //USER PHOTOS */}
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
            </div>

            {/* //TEXT INPUTS */}
            <div
                style={{
                    width: '100%',
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
                    placeholder={auth?.name || "Isim"}
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
                    <h3 style={{ fontSize: ".9rem", fontWeight: "600" }}>Doğum Günü</h3>
                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                        }}
                    >
                        <InputContainer
                            value={day}
                            setValue={setDay}
                            containerStyle={{ flex: "1" }}
                            height="50px"
                            width="100%"
                            inputClass={"user-profile-input user-profile-input-date"}
                            placeholder="MM"
                            border={`1px solid ${colors.borderColor1}`}
                        />
                        <InputContainer
                            value={month}
                            setValue={setDay}
                            containerStyle={{ flex: "1" }}
                            height="52px"
                            width="100%"
                            inputClass={"user-profile-input user-profile-input-date"}
                            placeholder="DD"
                            border={`1px solid ${colors.borderColor1}`}
                        />
                        <InputContainer
                            value={year}
                            setValue={setDay}
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

            {/* //TEXT AREA */}
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem', gap: '10px 0' }}>
                <h3 style={{ fontSize: ".9rem", fontWeight: "600", marginLeft: '.5rem' }}>Biyografi</h3>
                <div onClick={() => textareaRef.current.focus()}
                    style={{ height: '120px', border: `1px solid ${colors.borderColor1}`, display: 'flex', flexDirection: 'column', padding: '.6rem', borderRadius: '12px', position: 'relative' }}>
                    {<div style={{ position: 'absolute', display: 'flex', gap: '0 5px', alignItems: 'center', color: colors.fadedText, fontSize: '.9rem' }}>
                        <PenIcon />
                        {!bio && (auth.bio || 'Kendinizden Bahsedin')}
                    </div>}
                    <textarea value={bio} ref={textareaRef} onChange={(e) => setBio(e.target.value)} className="user-profile-textarea" style={{ width: '100%', resize: 'none', flex: '1', textIndent: '25px', lineHeight: '18px' }} />
                </div>
            </div>

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px 15px",
                    marginBlock: '2.5rem 0'
                }}>

                {locations?.length > 0 && <DropdownList
                    title={'Ülke'}
                    titleStyle={{ fontSize: ".9rem", fontWeight: "600", marginLeft: '.5rem' }}
                    wrapperStyle={{ marginBlock: '0', flex: '1' }}
                    dropdownStyle={{ height: '52px' }}
                    onDropDown={showCountryList}
                    showDropdown={showCountry}
                    selectedItem={location.country}
                    icon={<Flag country={location.countryCode} />}
                >
                    {locations.map((location, index) => <FlexBox
                        onClick={() => handleCountry(index)}
                        key={index}
                        className='dropdown-item'
                        gap='0 10px'
                        width={'100%'}>
                        <Flag country={location?.countryCode} />
                        {location?.name}
                    </FlexBox>)}
                </DropdownList>}


                {
                    location?.states?.length > 0 && <DropdownList
                        title={'Şehir'}
                        titleStyle={{ fontSize: ".9rem", fontWeight: "600", marginLeft: '.5rem' }}
                        wrapperStyle={{ marginBlock: '0', flex: '1' }}
                        dropdownStyle={{ height: '52px' }}
                        onDropDown={showStateList}
                        showDropdown={showStates}
                        selectedItem={location.state || "Şehir Bulunmuyor"}
                        icon={<LocationIcon width='24' height='24' color={colors.darkText} />}
                    >
                        {location.states.map((state, index) => <FlexBox
                            onClick={() => handleState(index)}
                            key={index}
                            className='dropdown-item'
                            gap='0 10px'
                            width={'100%'}>
                            {state.name}
                        </FlexBox>)}
                    </DropdownList>

                }

            </div>


            {/* //TEXT INPUTS */}
            <div
                style={{
                    width: '100%',
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
                    height="50px"
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
                    height="50px"
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

            <div style={{ marginTop: '2.5rem' }} className="user-profile-interests">

                <FlexBox onClick={handleEditInterest} width={'100%'} justifyContent="space-between" style={{ marginBottom: '10px', cursor: 'pointer' }}>
                    <h3 style={{ fontSize: ".9rem", fontWeight: "600", marginLeft: '.5rem' }}>İlgi alanlarınız</h3>
                    <div style={{ display: 'flex', gap: '0 2px', alignItems: 'center', color: colors.brand1, fontSize: '.9rem' }}>
                        <PenIcon color={colors.brand1} />
                        {!showInterests ? 'Düzenle' : 'Tamamla'}
                    </div>
                </FlexBox>


                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }} className="user-profile-interests-wrapper">
                    {
                        !showInterests ? selectedInterests.map((interest, index) => <HobbieCheckBox
                            checkboxStyle={{ height: '53px' }}
                            key={index}
                            interest={interest}
                            isSelectable={false}
                            isActive={false} />) :

                            interests.map((interest, index) => <HobbieCheckBox
                                checkboxStyle={{ height: '53px' }}
                                key={index}
                                interest={interest}
                                isSelectable={true}
                                onClick={() => handleInterestClick(interest)}
                                isActive={selectedInterests.some(selectedInterest => selectedInterest._id === interest._id)} />)
                    }
                </div>
            </div>
        </div>
    );

    function handleEditInterest() {
        setShowInterests(prev => !prev);
    }

    function handleInterestClick(interest) {
        !selectedInterests.some(selectedInterest => selectedInterest._id === interest._id) ? setSelectedInterests(prev => [...prev, interest])
            : setSelectedInterests(prev => prev.filter((selectedInterest) => selectedInterest._id !== interest._id));
    }

    function handleCountry(index) {
        setLocation({
            country: locations[index].name,
            countryCode: locations[index].countryCode,
            states: locations[index].states,
            state: locations[index]?.states?.[0]?.name || '',
            countryId: locations[index]?.id,
            stateId: locations[index]?.states?.[0]?.id || ''
        });
    }

    function handleState(index) {
        setLocation((prev) => ({
            ...prev,
            state: location.states[index].name,
            stateId: location.states[index].id
        }));
    }

    //200ms bekliyoruz dropdown height doğru almak için.
    //Bekleme yapmsak ilk anda bir dropdow height olmadığı için scroll olmayakcaktır.
    function showStateList() {
        setShowStates(prev => !prev);
        setTimeout(() => {
            userRightColumnRef.current.scroll({
                top: userRightColumnRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 200)
    }

    //200ms bekliyoruz dropdown height doğru almak için.
    //Bekleme yapmsak ilk anda bir dropdow height olmadığı için scroll olmayakcaktır.
    function showCountryList() {
        setShowCountry(prev => !prev);
        setTimeout(() => {
            userRightColumnRef.current.scroll({
                top: userRightColumnRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 200)
    }
};

export default UserProfile;
