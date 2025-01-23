import React from 'react';
import PremiumBox from '../../../copmonents/premium_box';
import { useMediaPredicate } from 'react-media-hook';
import '../../../css/dashboard/user-home.css';

const UserHome = () => {

  const hidePremium = useMediaPredicate("(max-width: 1190px)");
  const hideNotifications = useMediaPredicate("(max-width:650px)");

  const syle = {
    // grid-template-columns: auto 3fr 2fr;
  }


  return (
    <section className='user-home' style={{ gridTemplateColumns: !hidePremium ? 'auto 3fr 2fr' : !hideNotifications ? '3fr 2fr' : '1fr' }}>
      {!hidePremium && <PremiumBox />}

      <div className='grid-item'>

      </div>

      {!hideNotifications && <div className='grid-item grig-item-notications'></div>}


    </section>
  )
}

export default UserHome
