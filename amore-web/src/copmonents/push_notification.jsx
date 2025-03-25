import React from 'react'
import { CrossCloseIcon } from '../assets/svg/svg_package'
import { colors } from '../utils/theme';
import avatarImage from '../assets/images/avatar7.png'
import FlexBox from './flex_box';
import { toast } from 'react-toastify';

const PushNotification = ({ payload }) => {

    const extraData = JSON.parse(payload?.data?.extraData);

    return (
        <div className='push-notification'>
            <div className='push-notification-image'>
                <img width={'100%'} height={'100%'} src={extraData?.senderImage || avatarImage} />
            </div>

            <FlexBox flexDirection='column' alignItems='flex-start' gap='6px 0'>
                <h4>{payload?.notification.title}</h4>
                <p>{payload?.notification.body}</p>
            </FlexBox>

            <CrossCloseIcon
                onClick={() => toast.dismiss(payload.messageId)}
                color={colors.darkText}
                width='24'
                height='24'
                strokeWidth='2.5'
                style={{
                    cursor: "pointer",
                    background: colors.inputColor,
                    padding: '.2.3rem',
                    borderRadius: '50%',
                    border: `.4px solid ${colors.borderColor1}`,
                    position: "absolute",
                    right: '0',
                    top: '0',
                    margin: '.45rem'
                }}
            />

        </div>
    )
}

export default PushNotification
