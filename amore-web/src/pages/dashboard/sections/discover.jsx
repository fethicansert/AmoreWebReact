import React, { useEffect, useState } from 'react'
import { axiosAuth } from '../../../api/axios';
import { useAuth } from '../../../hooks/use_auth';
import '../../../css/dashboard/discover.css';
const Discover = () => {

    const { auth } = useAuth();
    const [users, setUsers] = useState();

    console.log(users);


    useEffect(() => {
        const getUsers = async () => {

            try {
                const headers = { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJiMjFjM2UzNTZiN2U1MTgyODI1MzMiLCJpZCI6IjY2YmIyMWMzZTM1NmI3ZTUxODI4MjUzMyIsIm5hbWUiOiJDYWJiYXIiLCJsYW5ndWFnZSI6ImVuIiwiaWF0IjoxNzM3NjIyOTgwLCJleHAiOjQ4NDgwMjI5ODB9.mwwNpHwqeCOUVRrp6R6CVWkxZeMvWKnpp8I2HFMbp20` }
                const response = await axiosAuth.get('user/all_v3?minAge=18&maxAge=70&isOnline=true&distance=50&gender=female', {
                    headers
                })
                if (response.status === 200)
                    setUsers(response.data.data);
            }
            catch (e) {
                console.log(e);
            }
        }
        getUsers();
    }, []);

    return (
        <section className='discover'>
            <div className='discover-users'>
                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>
                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>

                <div className='user-box' >
                    user
                </div>
            </div>

            <div className='discover-users-filter'>
                Filter
            </div>
        </section>
    )
}

export default Discover
