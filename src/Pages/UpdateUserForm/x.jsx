import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


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
        })  // Replace with your API endpoint
            .then(response => {
                const user = response.data;  // Assuming your API returns user details
                // console.log(user);
                setValue('profile_pic', user.profile_pic);
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

            // await axios.put(' http://127.0.0.1:8000/accounts/update/', data);
            await axios.put(' http://127.0.0.1:8000/accounts/update/', data, {
                headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Handle successful update, e.g., show a success message
            navigate('/details');
        } catch (error) {
            console.error('Error updating user details:', error);
            setError('api', { message: 'Error updating user details. Please try again.' });
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
            <input type="file" {...register('profile_pic')} className="form-select mb-4 border rounded-md p-2" />

            <label className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
            {/* <input type="text" {...register('birth_date')} className="form-select mb-4 border rounded-md p-2" /> */}
            <DatePicker
                {...register('birth_date')}
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    setValue('birth_date', date);
                }}
                className="form-select mb-4 border rounded-md p-2"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select {...register('gender')} className="form-select mb-4 border rounded-md p-2">
                {genderOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

            <label className="block text-sm font-medium text-gray-700 mb-1">Division</label>
            <select {...register('division')} className="form-select mb-4 border rounded-md p-2">
                {divisionOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

            <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
            <input type="text" {...register('district')} className="form-select mb-4 border rounded-md p-2" />

            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="text" {...register('phone')} className="form-select mb-4 border rounded-md p-2" />

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Update
            </button>
        </form>
    );
};

export default UpdateUserForm;
