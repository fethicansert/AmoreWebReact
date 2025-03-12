import React from 'react'
import FlexBox from '../../../copmonents/flex_box';
import { CreditCardChipIcon, MasterCardIcon, WirelessIcon } from '../../../assets/svg/svg_package';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

const CreditCard = ({ name, cardNumber, month, year }) => {
    const { t, _ } = useTranslation();
    return (
        <div className='credit-card'>

            {creditCardCirleOptions.map(option => <CreditCardCircle
                key={uuidv4()}
                left={option.left}
                top={option.top}
                size={option.size}
                borderColor={option.borderColor} />)}

            <div className='credit-card-content'>

                <FlexBox width={'100%'} height={'100%'} justifyContent='space-between' flexDirection='column' alignItems='flex-start'>
                    <FlexBox justifyContent='space-between' width={'100%'} alignItems='center'>
                        <CreditCardChipIcon />
                        <WirelessIcon />
                    </FlexBox>

                    <FlexBox width={'100%'} flexDirection='column' gap='30px 0'>

                        <FlexBox width={'100%'} flexDirection='column' alignItems='flex-start' gap='5px 0' className='credit-card-flex-username'>
                            <span>{name || t('DASHBOARD.PAYMENT.CHECKOUT.NAME_SURNAME_PLACEHOLDER')}</span>
                            <span>{cardNumber ? '****' + ' ' + cardNumber.slice(-4) : '**** 3456'}</span>
                        </FlexBox>

                        <FlexBox width={'100%'} justifyContent='space-between' alignItems='center' className='credit-card-flex-last-date'>
                            <span>{month || 'MM'}/{year || 'YY'}</span>

                            <FlexBox flexDirection='column' gap='1px 0'  >
                                <MasterCardIcon />
                                <span style={{ fontWeight: 600, fontSize: '.42rem' }}>mastercard</span>
                            </FlexBox>
                        </FlexBox>

                    </FlexBox>
                </FlexBox>


            </div>
        </div>
    );

    function CreditCardCircle({ size, top, left, borderColor }) {
        return <div
            style={{
                width: size,
                height: size,
                top, left,
                border: `1px solid ${borderColor}`,
                position: 'absolute',
                borderRadius: '50%'
            }}>
        </div>
    }
}

const creditCardCirleOptions = [
    {
        size: "600px",
        borderColor: "#00000005",
        top: "7.65px",
        left: "-118px"
    },
    {
        size: "476px",
        borderColor: "#00000008",
        top: "79.08px",
        left: "-47px"
    },
    {
        size: "366px",
        borderColor: "#0000000A",
        top: "134.03px",
        left: "-7.87px"
    },
    {
        size: "281.78px",
        borderColor: "#0000000D",
        top: "176.3px",
        left: "50.14px"
    },
    {
        size: "216.75px",
        borderColor: "#0000001A",
        top: "210.81px",
        left: "86px"
    },
    {
        size: "166.73px",
        borderColor: "#0000001F",
        top: "250.57px",
        left: "124.64px"
    }
]


export default CreditCard
