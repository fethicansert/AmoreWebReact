import React from 'react'
import { BlockedUsers, LanguageIcon, SettingsIcon, StarIcon, SupportIcon, UserIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'
import { NavLink } from 'react-router-dom'


const UserProfileNavigation = () => {

    const routeItems = [
        {
            icon: <UserIcon className='' width={23} height={23} color={colors.darkText} />,
            path: '',
            name: 'Profil'
        },
        {
            icon: <LanguageIcon width={23} height={23} color={colors.darkText} />,
            path: 'language',
            name: 'Dil'
        },
        {
            icon: <SettingsIcon className='' width={23} height={23} color={colors.darkText} />,
            path: 'settings',
            name: 'Ayarlar'
        },
        {
            icon: <BlockedUsers className='' width={23} height={23} color={colors.darkText} />,
            path: 'blocked-users',
            name: 'Engellenmiş Kullanıcılar'
        },
        {
            icon: <SupportIcon className='' width={23} height={23} color={colors.darkText} />,
            path: 'support',
            name: 'Destek Sistemi'
        },
        {
            icon: <StarIcon className='' width={23} height={23} color={colors.darkText} />,
            path: 'influencer',
            name: 'Influencer'
        }
    ]

    return (
        <nav className='user-profile-navigation'>

            {routeItems.map((route, index) => <NavLink
                className={({ isActive }) =>
                    isActive ? "user-profile-navigation-item active" : "user-profile-navigation-item"
                }
                end={route.path === ''}
                to={route.path}
                key={index}>
                {route.icon}
                <span>{route.name}</span>
            </NavLink>)}

        </nav>
    )
}

export default UserProfileNavigation
