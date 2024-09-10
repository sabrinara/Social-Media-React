
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';
import ani from '../../../public/login.json';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const onSubmit = async (data) => {
        try {
            const result = await signIn(data.email, data.password);

            const response = await axios.post(' http://127.0.0.1:8000/accounts/login/', data);
            localStorage.setItem('access-token', response.data.token);

            toast.success('Login Successful');
            navigate("/");

        } catch (error) {
            toast.error('Login Failed');
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className=" min-h-screen bg-sky-800">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center p-8 rounded shadow-md w-full">
                <div className="w-full md:w-1/2">
                    <Lottie animationData={ani} loop={true} />

                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl text-center font-semibold mb-4 text-white">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { required: 'Email is required' })}
                                className={`mt-1 p-2 w-full border rounded bg-gray-800 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register('password', { required: 'Password is required' })}
                                className={`mt-1 p-2 w-full border rounded bg-gray-800 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-white text-sky-900 font-bold px-4 py-2 rounded hover:bg-sky-300 focus:outline-none focus:shadow-outline-blue active:bg-sky-800"
                            disabled={!Object.keys(errors).length === 0}
                        >
                            Login
                        </button>


                        <p className="mt-4 text-sm">
                            Don&apos;t have an account?
                            <span className='ml-2 mt-10'>
                                <Link className="bg-white text-sky-900 font-bold px-4 py-2 rounded hover:bg-sky-300 focus:outline-none focus:shadow-outline-green active:bg-sky-400  " to="/signUp">Sign Up</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
