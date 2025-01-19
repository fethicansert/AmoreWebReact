import { v4 as uuidv4 } from 'uuid';
import HobbieCheckBox from '../comps/hobbie_checkbox';

const RegisterHobbies = ({ selectedHobbies, setSelectedHobbies, interests }) => {

    return (
        <div className='register-hobbies'>
            {
                interests.length ? interests.map(interest => <HobbieCheckBox
                    key={uuidv4()}
                    interest={interest}
                    addHobbie={setSelectedHobbies}
                    isActive={selectedHobbies.includes(interest._id)} />)
                    : <p>400 Something went wrong !</p>
            }
        </div>
    )
};

export default RegisterHobbies;

