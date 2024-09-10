import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateUserForm = () => {
    const { register, handleSubmit, setValue, watch, setError, formState: { errors } } = useForm();
    const genderOptions = ['Male', 'Female'];  // Replace with your actual gender options
    const divisionOptions = ['Dhaka', 'Chittagong', 'Khulna', 'Sylhet', 'Rajshahi', 'Barishal', 'Rangpur', 'Mymensingh'];  // Replace with your actual division options
    const [startDate, setStartDate] = useState(null);
    const token = localStorage.getItem('access-token');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details and set form values
        axios.get(' http://127.0.0.1:8000/accounts/update/', {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then(response => {
                const user = response.data;
                setValue('birth_date', user.birth_date);
                setStartDate(new Date(user.birth_date));
                setValue('gender', user.gender);
                setValue('division', user.division);
                setValue('district', user.district);
                setValue('phone', user.phone);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, []);

    const onSubmit = async (data) => {
        try {
            const formattedDate = startDate ? startDate.toISOString().split('T')[0] : null;
            data.birth_date = formattedDate;

            console.log(data);
            await axios.put(' http://127.0.0.1:8000/accounts/update/', data, {
                headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('User details updated successfully!');
            navigate('/details');
        } catch (error) {
            console.error('Error updating user details:', error);
            setError('api', { message: 'Error updating user details. Please try again.' });
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="py-10 px-10 max-w-xl mx-auto bg-sky-950 rounded-md shadow-md ">

            <h2 className="text-2xl text-center font-semibold mb-4 text-white">Update User</h2>

            <div className='flex flex-col md:flex-row justify-between md:items-center  md:gap-6 '>
                <div>
                    <label className="block text-sm font-medium text-white mb-1">Birth Date</label>

                    <DatePicker
                        {...register('birth_date')}
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            setValue('birth_date', date);
                        }}
                        className="form-select mb-4 border rounded-md p-2 w-full bg-gray-800"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white mb-1 ">District</label>
                    <input type="text" {...register('district')} className="form-select mb-4 border rounded-md p-2 bg-gray-800" />

                </div>

            </div>



            <div className='flex flex-col md:flex-row justify-between md:items-center  md:gap-6'>
                <div>
                    <label className="block text-sm font-medium text-white mb-1">Division</label>
                    <select {...register('division')} className="form-select mb-4 border rounded-md p-2 bg-gray-800">
                        {divisionOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white mb-1">Gender</label>
                    <select {...register('gender')} className="form-select mb-4 border rounded-md p-2 bg-gray-800 ">
                        {genderOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white mb-1">Phone</label>
                    <input type="text" {...register('phone')} className="form-select mb-4 border rounded-md p-2 bg-gray-800" />

                </div>

            </div>

           <div className='flex md:justify-center mt-6'>
           <button type="submit" className="bg-white text-sky-900 font-bold py-2 px-20 md:px-56 rounded-md hover:bg-sky-300">
                Update
            </button>
           </div>
        </form>
    );
};

export default UpdateUserForm;
