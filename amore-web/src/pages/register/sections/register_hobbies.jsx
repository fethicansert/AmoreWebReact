import { v4 as uuidv4 } from 'uuid';
import HobbieCheckBox from '../comps/hobbie_checkbox';
import { height } from '@mui/system';

const RegisterHobbies = ({ selectedHobbies, setSelectedHobbies, interests }) => {



    return (
        <div className='register-hobbies'>
            {
                interests.length ? interests.map(interest => <HobbieCheckBox
                    checkboxStyle={{ height: '45px' }}
                    key={uuidv4()}
                    interest={interest}
                    onClick={() => handleClick(interest)}
                    isActive={selectedHobbies.includes(interest._id)} />)
                    : <p>400 Something went wrong !</p>
            }
        </div>
    )

    function handleClick(interest) {
        !selectedHobbies.includes(interest._id) ? setSelectedHobbies(prev => [...prev, interest._id])
            : setSelectedHobbies(prev => prev.filter((hobbie) => hobbie !== interest._id));
    }
};

export default RegisterHobbies;

