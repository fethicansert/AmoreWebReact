import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { colors } from '../../../utils/theme';
import { scrollPage } from '../../../utils/functions';
import { useAppData } from '../../../hooks/use_add_data';


const OtpRegister = ({ phone, setPhone }) => {


    const { ipLocation } = useAppData();

    //IF ipLocatiob has no error use ipLocation Country Code OR 
    //Use Device Language to select Country Flag and Code
    const countryCode = ipLocation?.country?.countryCode?.toLowerCase() || navigator.language;


    return (
        <div>
            <div style={{ border: `1px solid ${colors.borderColor1}`, borderRadius: '12px', height: 'clamp(50px, 11.2vw, 58px)' }}>

                <PhoneInput
                    onBlur={() => scrollPage({ top: 0 })}
                    countryCodeEditable={false}
                    buttonClass='phone-button'
                    containerStyle={{ borderRadius: '12px', height: '100%' }}
                    inputStyle={{
                        fontSize: '1rem',
                        background: colors.backGround3,
                        width: '100%', height: '100%',
                        borderRadius: '12px',
                        border: 'none'
                    }}
                    buttonStyle={{
                        backgroundColor: colors.backGround3,
                        height: '100%',
                        padding: '0 0 0 0',
                        marginLeft: '5px',
                        borderTopLeftRadius: '12px',
                        borderBottomLeftRadius: '12px',
                        border: 'none'
                    }}
                    country={countryCode}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                />

            </div>
        </div>
    )
}

export default OtpRegister
