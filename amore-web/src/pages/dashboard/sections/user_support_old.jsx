import React, { useEffect, useState } from 'react'
import { axiosAmore } from '../../../api/axios';
import UserTicket from '../components/user_ticket';
import { ClipLoader } from 'react-spinners';
import { colors } from '../../../utils/theme';
import { useOutletContext } from 'react-router-dom';

const UserSupportOld = () => {
    
    const [tickets, setTickets] = useState([]);
    const [ticketsLoading, setTicketsLoading] = useState(true);
    


    useEffect(() => {
      getTickets();     
            
    },[]);

  return (
    <div className='user-support-old'>
            {
              ticketsLoading ? 
              <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ClipLoader color={colors.brand1} />
                </div>  :

              tickets.length > 0 ? <div>
                {tickets.map(ticket => <UserTicket key={ticket._id} ticket={ticket} setTickets={setTickets} />)}
          
              </div>
              : <p>Ticket Bulunmuyor</p>
            }
    </div>
  );


  async function getTickets() {

      setTicketsLoading(true)

      try {
        const response = await axiosAmore.get('/user/v2/supports',{ useAuth:true });        
        setTickets(response.data.data)        
      } 

      catch (e) {
        console.log(e);
      }

      finally {
        setTicketsLoading(false)
      }
  }

}

export default UserSupportOld
