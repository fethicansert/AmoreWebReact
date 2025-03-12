import React from 'react'
import { ArrowHeadRight } from '../../../assets/svg/svg_package'
import FlexBox from '../../../copmonents/flex_box';
import { Link } from 'react-router-dom';
import { colors } from '../../../utils/theme';
import NotificationShimmer from './notification_shimmer';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next'


const UserHomeNotifications = ({ title, path, children, isLoading, type }) => {

    const { t, i18n } = useTranslation();

    return <div className='user-home-notications-container' >

        <FlexBox justifyContent='space-between' style={{ marginBottom: '1rem' }}>
            <h4>{title}</h4>

            {children?.length > 0 && <Link to={path}>
                {t('DASHBOARD.TITLES.SEE_ALL')}
                <ArrowHeadRight color={colors.brand1} width='13' height='13' strokeWidth='2' />
            </Link>}

        </FlexBox>

        {isLoading ? <>
            {Array(4).fill().map((_, i) => <NotificationShimmer key={uuidv4()} />)}
        </> : children.length !== 0 ? children : <span style={{ color: colors.lowFadedText, fontWeight: '600', fontSize: '.8rem' }}>
            {type === 'message' ? t('DASHBOARD.TITLES.EMPTY_MESSAGE') : t('DASHBOARD.TITLES.EMPTY_LIKES')}
        </span>}

    </div>
}
export default UserHomeNotifications
