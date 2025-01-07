import { v4 as uuidv4 } from 'uuid';

import HobbieCheckBox from '../comps/hobbie_checkbox';

const RegisterHobbies = ({ selectedHobbies, setSelectedHobbies }) => {
    console.log(selectedHobbies);

    return (
        <div className='register-hobbies'>
            {hobbiesData.map(hobbie => <HobbieCheckBox key={uuidv4()} icon={hobbie.icon} text={hobbie.text} value={hobbie.value} addHobbie={setSelectedHobbies} isActive={selectedHobbies.includes(hobbie.value)} />)}

        </div>
    )
};

export default RegisterHobbies;


const hobbiesData = [
    {
        icon: "🍃",
        text: "Doğa",
        value: "nature"
    },
    {
        icon: "🏦",
        text: "Mimari",
        value: "architectural"
    },
    {
        icon: "🐻",
        text: "Hayvanlar",
        value: "animals"
    },
    {
        icon: "💪",
        text: "Spor ve Fitness",
        value: "Sport"
    }, {
        icon: "👗",
        text: "Moda",
        value: "fashion"
    },
    {
        icon: "🗣️",
        text: "Dil",
        value: "language"
    },
    {
        icon: "📚",
        text: "Kitap",
        value: "book"
    },
    {
        icon: "⚽",
        text: "Futbol",
        value: "football"
    },
    {
        icon: "💃",
        text: "Dans",
        value: "dance"
    },
    {
        icon: "🎮",
        text: "Oyun",
        value: "game"
    },
    {
        icon: "🎨",
        text: "Resim",
        value: "Painting"
    }, {
        icon: "📸",
        text: "Fotoğrafçılık",
        value: "photography"
    },
    {
        icon: "🎶",
        text: "Müzik",
        value: "Music"
    },
    {
        icon: "👨‍🦰",
        text: "İnsanlar",
        value: "people"
    },
    {
        icon: "🎥",
        text: "Filmler",
        value: "movies"
    },
    {
        icon: "🧑‍🎨",
        text: "Sanat",
        value: "art"
    },
    {
        icon: "🤖",
        text: "Teknoloji",
        value: "technology"
    }, {
        icon: "🛹",
        text: "Eğlence",
        value: "fun"
    },
    {
        icon: "🛬",
        text: "Seyahat",
        value: "travel"
    },
    {
        icon: "🌎",
        text: "Dünya",
        value: "earth"
    },
    {
        icon: "🥳",
        text: "Partiler",
        value: "parties"
    },
    {
        icon: "🍾",
        text: "İçecekler",
        value: "drinks"
    }


]
