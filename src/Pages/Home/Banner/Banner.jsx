
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import ani from '../../../../public/Animation - 1725563979597.json';
import useAuth from '../../../Hooks/useAuth';

const Banner = () => {
    const { user } = useAuth();
    return (
        <section className="bg-sky-950 py-12 h-[100vh]  md:h-[80vh] ">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 px-4 md:ml-10 md:mb-20 text-center md:text-start">
                    <h1 className="text-sm font-bold uppercase tracking-widest mb-2 hidden md:block">SocioLife</h1>
                    <h1 className="text-4xl font-bold mb-4">Our Platform for Connect with Your Community</h1>
                    <p className="text-lg mb-5">Join the conversation, share your moments!</p>
                    {!user ?
                        <div>
                            <Link to="/signUp">
                                <button className="bg-white text-sky-800 font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-800 transition duration-300 ease-in-out">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                        :
                        <div>
                            <Link to="/posts">
                                <button className="bg-white text-sky-800 font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-800 transition duration-300 ease-in-out">
                                    Dashboard
                                </button>
                            </Link>
                        </div>
                    }
                </div>
                <div className='w-full md:w-1/2 '>
                    <Lottie loop={true} animationData={ani} className='md:h-[78vh]' />
                </div>
            </div>
        </section>
    );
};

export default Banner;
