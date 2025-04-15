import React from 'react'
import { BlockedUsers, LanguageIcon, LogoutIcon, SettingsIcon, StarIcon, SupportIcon, UserIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'
import { NavLink } from 'react-router-dom'
import { useBanner } from '../../../hooks/use_banner'

const routeItems = [
    {
        icon: <UserIcon className='' width={21} height={21} color={colors.darkText} />,
        path: '',
        name: 'Profil'
    },
    {
        icon: <LanguageIcon width={21} height={21} color={colors.darkText} />,
        path: 'language',
        name: 'Dil'
    },
    {
        icon: <SettingsIcon className='' width={21} height={21} color={colors.darkText} />,
        path: 'settings',
        name: 'Ayarlar'
    },
    {
        icon: <BlockedUsers className='' width={21} height={21} color={colors.darkText} />,
        path: 'blocked-users',
        name: 'Engellenmiş Kullanıcılar'
    },
    {
        icon: <SupportIcon className='' width={21} height={21} color={colors.darkText} />,
        path: 'support',
        name: 'Destek Sistemi'
    },
    {
        icon: <StarIcon className='' width={21} height={21} color={colors.darkText} />,
        path: 'influencer',
        name: 'Influencer'
    },

    {
        icon: <LogoutIcon className='' width={21} height={21} color={colors.darkText} />,
        path: undefined,
        name: 'Çıkış Yap',
        type: 'button',
    }
]


const UserProfileNavigation = ({ setCurrentIndex }) => {

    const { setShowLogout } = useBanner();

    return (
        <nav className='user-profile-navigation'>

            {routeItems.map((route, index) => route?.type !== 'button' ? <NavLink
                onClick={() => setCurrentIndex(index)}
                className={({ isActive }) =>
                    isActive ? "user-profile-navigation-item active" : "user-profile-navigation-item"
                }
                end={route.path === ''}
                to={route.path}
                key={index}>
                {route.icon}
                <span>{route.name}</span>
            </NavLink> : <div
                onClick={() => setShowLogout(true)}
                className='user-profile-navigation-item'>
                {route.icon}
                <span>{route.name}</span>
            </div>)}

        </nav>
    )
}

export default UserProfileNavigation
