import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import FlexBox from '../../copmonents/flex_box';
import amoreLogo from '../../assets/icons/amore_icon.png'
import '../../css/dashboard/dashboard.css'
import { v4 as uuidv4 } from 'uuid';
import { ChatBubbleIcon, CoinIcon, DiamondIcon, DiscoverIcon, DoubleHeartIcon, HomeIcon, LogoutIcon, NotificationIcon, UserIcon } from '../../assets/svg/svg_package';
import LayoutLinkIcon from './comps/layout_link_icon';
import Logout from '../../copmonents/logout';
import { colors } from '../../utils/theme';
import LayoutLinkBox from './comps/layout_link_box';
const linkTitles = ['Ana Sayfa', 'Bildirimler', 'Kesfet', 'Eşlemeler', 'Mesajlar', 'Jeton Al', 'Premium Ol', 'Profil'];

const Dashboard = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [currentposition, setCurrentPosition] = useState(0);
    const [hoverPosition, setHoverPosition] = useState(0);
    const [showLogout, setShowLogout] = useState(false);
    const [showNavigation, setShowNavigation] = useState();


    const routes = [
        {
            path: 'user-home',
            icon: <HomeIcon />
        },
        {
            path: null,
            icon: <NotificationIcon />
        },
        {
            path: 'discover',
            icon: <DiscoverIcon />
        },
        {
            path: 'matches',
            icon: <DoubleHeartIcon />
        },
        {
            path: 'chat',
            icon: <ChatBubbleIcon />
        },
        {
            path: 'market',
            icon: <CoinIcon />
        },
        {
            path: 'premium-subscription',
            icon: <DiamondIcon />
        },
        {
            path: 'user',
            icon: <UserIcon color='#4B164C' width={25} height={25} />
        }
    ]

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.backGround2);
    }, []);


    return (
        <div className='layout'>

            {showLogout && <Logout closeLogout={() => setShowLogout(false)} />}

            {showOverlay && <div className='layout-overlay'></div>}

            <div className={`layout-header ${showNavigation ? 'notifications-active' : ''} `} onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => {
                setShowOverlay(false);
                setHoverPosition(currentposition * 61);
                // setShowNavigation(false);
            }}>

                <FlexBox flexDirection='column' gap='15px 0'>

                    <LayoutLinkIcon path={'/'} icon={<img src={amoreLogo} width={'35px'} />} />

                    <nav className='layout-header-navigation'>

                        <span style={{ transform: `translateY(${hoverPosition}px)` }} className='layout-header-navigation-postion'></span>

                        {routes.map((route, index) => route.path
                            ? <LayoutLinkIcon
                                key={uuidv4()}
                                path={route.path}
                                icon={route.icon}
                                onClik={() => setCurrentPosition(index)}
                                onHover={() => setHoverPosition(index * 61)} />
                            : <div
                                onMouseEnter={() => setHoverPosition(index * 61)}
                                onClick={() => {
                                    setCurrentPosition(index);
                                    setShowNavigation(prev => !prev);
                                }}
                                className={`notification-button ${showNavigation ? 'active' : ''}`}
                                style={{ height: '29px', margin: '16px 0', display: 'block' }}>
                                {route.icon}
                            </div>)}

                    </nav>
                </FlexBox>

                <LogoutIcon className='logout-icon' onClick={() => setShowLogout(true)} />

                <div className='layout-header-active-part' onMouseLeave={() => setHoverPosition(currentposition * 61)}>
                    <FlexBox flexDirection='column' gap='15px 0'>
                        <h2 className='layout-header-title'>Amore</h2>

                        <FlexBox>
                            <nav className='layout-header-active-part-navigation'>
                                {linkTitles.map(title => <LayoutLinkBox key={uuidv4()} title={title} />)}
                            </nav>
                        </FlexBox>

                    </FlexBox>
                </div>

                <div className={`notifications ${showNavigation ? 'active' : ''}`}>
                    <FlexBox justifyContent='flex-start' style={{ padding: '1rem 0', borderBottom: `1px solid ${colors.borderColor1}` }}>
                        <h3>Bildirimler</h3>
                    </FlexBox>
                </div>
            </div>



            <Outlet />
        </div>
    )
}


export default Dashboard;
