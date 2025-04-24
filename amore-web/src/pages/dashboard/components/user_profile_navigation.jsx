import React from 'react'
import { BlockedUserIcon, LanguageIcon, LogoutIcon, SettingsIcon, SupportIcon, UserIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'
import { NavLink } from 'react-router-dom'
import { useBanner } from '../../../hooks/use_banner'
import { useTranslation } from 'react-i18next'


const routeItems = [
    {
        icon: <UserIcon className='' width={21} height={21} color={colors.darkText} />,
        path: '',
    },
    {
        icon: <LanguageIcon width={21} height={21} color={colors.darkText} />,
        path: 'language',
    },
    {
        icon: <SettingsIcon className='' width={21} height={21} color={colors.darkText} />,
        path: 'settings',
    },
    {
        icon: <BlockedUserIcon className='' width={21} height={21} color={colors.darkText} />,
        path: 'blocked-users',
    },
    {
        icon: <SupportIcon className='' width={21} height={21} color={colors.darkText} />,
        path: 'support',
    },

    {
        icon: <LogoutIcon className='' width={21} height={21} color={colors.darkText} />,
        path: undefined,
        name: 'Çıkış Yap',
        type: 'button',
    }
]


const UserProfileNavigation = () => {

    const { setShowLogout } = useBanner();
    const { t, _ } = useTranslation();
 
    return (
        <nav className='user-profile-navigation'>

            {routeItems.map((route, index) => route?.type !== 'button' ? <NavLink
                className={({ isActive }) =>
                    isActive ? "user-profile-navigation-item active" : "user-profile-navigation-item"
                }
                end={route.path === ''}
                to={route.path}
                key={index}>
                {route.icon}
                <span>{t(`DASHBOARD.PROFILE.ROUTE_NAMES.${!route.path ? 'USER_PROFILE' : route.path.replace('-','_').toUpperCase()}`)}</span>
            </NavLink> : <div
                key={index}
                onClick={() => setShowLogout(true)}
                className='user-profile-navigation-item'>
                {route.icon}
                <span>{route.name}</span>
            </div>)}

        </nav>
    )
}

export default UserProfileNavigation
