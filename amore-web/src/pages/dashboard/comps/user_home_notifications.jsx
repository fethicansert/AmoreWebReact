import React from 'react'
import { ArrowHeadRight } from '../../../assets/svg/svg_package'
import FlexBox from '../../../copmonents/flex_box';
import { Link } from 'react-router-dom';
import { colors } from '../../../utils/theme';
import NotificationShimmer from './notification_shimmer';
import { v4 as uuidv4 } from 'uuid';

const UserHomeNotifications = ({ title, path, children, isLoading }) => {

    return <div className='user-home-notications-container' >

        <FlexBox justifyContent='space-between' style={{ marginBottom: '1rem' }}>
            <h4>{title}</h4>
            <Link to={path}>
                Tümünü Gör
                <ArrowHeadRight color={colors.brand1} width='13' height='13' strokeWidth='2' />
            </Link>
        </FlexBox>

        {isLoading ? <>
            {Array(4).fill().map((_, i) => <NotificationShimmer key={uuidv4()} />)}
        </> : children.length !== 0 ? children : <span style={{ color: colors.lowFadedText, fontWeight: '600', fontSize: '.8rem' }}>Mesaj Kutunuz Boş</span>}

    </div>
}
export default UserHomeNotifications
