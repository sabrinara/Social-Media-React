import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem('access-token');

    console.log(token);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {

                const response = await axios.get('https://social-media-drf.onrender.com/accounts/user_detail/', {
                    headers: {

                        Authorization: `Token ${token}`,
                    },
                });
                // console.log('User details:', response.data);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);
    // console.log(userData);

    return (
        <div className="container mx-auto mt-8 p-4 bg-sky-950 rounded shadow-md">
            <div className="flex justify-between md:mx-20 py-10">
                <h2 className="text-2xl font-bold mb-4  ">User Details</h2>
                <Link to={'/updateProfile'}><h3 className="text-2xl font-bold mb-4">Update Profile</h3></Link>
            </div>

            {userData ? (

                <div className="flex flex-col md:flex-row justify-center items-center pb-10 gap-10">
                    <div>
                        {userData.profile_pic && (
                            <div>

                                <img src={`https://social-media-drf.onrender.com/media/${userData.profile_pic}`} alt="Profile" className='w-48 md:w-80 rounded-full md:rounded' />
                            </div>
                        )}
                    </div>
                    <div className='text-xl'>
                        <p className="mb-2">Email: {userData.email}</p>
                        <p className="mb-2">First Name: {userData.first_name}</p>
                        <p className="mb-2">Last Name: {userData.last_name}</p>
                        <p className="mb-2">Birth Date: {userData.birth_date}</p>
                        <p className="mb-2">Gender: {userData.gender}</p>
                        {
                            userData.division ? <p className="mb-2">Division: {userData.division}</p> : <p className='mb-2'>Division: Not set yet, Update</p>
                        }
                        {
                            userData.district ? <p className="mb-2">District: {userData.district}</p> : <p className='mb-2'>District: Not set yet, Update</p>
                        }
                        {
                            userData.phone ? <p className="mb-2">Phone: {userData.phone}</p> : <p className='mb-2'>Phone: Not set yet, Update</p>
                        }

                    </div>





                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
};

export default UserDetail;
