import { Link } from "react-router-dom";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>

            <footer className="mt-10 bg-sky-950 text-white">
                <div className=" py-8">
                    <div className="flex flex-wrap ml-10 justify-center">
                        <div className="w-full md:w-1/5 mb-8 md:mb-0">
                            <Link to='/' >
                                <div className='flex flex-col items-center gap-2'>
                                    <img src="./logo.png" alt="logo" className='w-16 ' />
                                    <h1 className="text-2xl font-bold">
                                        <span className="text-sky-500">S</span><span className="text-green-500">o</span><span className="text-red-500">c</span><span className="text-yellow-400">i</span><span className="text-teal-300">o</span><span className="text-orange-500">L</span><span className="text-violet-400">i</span><span className="text-blue-300">f</span><span className="text-amber-500">e</span></h1>

                                </div>
                            </Link>
                        </div>
                        <div className="w-full md:w-2/5 mb-8 md:mb-0 md:px-16">
                            <h3 className="text-lg font-semibold mb-2">About Us</h3>
                            <p className="text-gray-300">
                               Visit or Follow us on social media to stay updated on the latest updates and announcements..
                            </p>
                          
                        </div>

                        <div className="w-full md:w-1/5 mb-8 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                            <ul className="list-none">
                                <li>
                                    <a href="/home" className="text-gray-300 hover:text-white">Home</a>
                                </li>
                                {/* ... (other quick links) */}
                            </ul>
                        </div>

                        <div className="w-full md:w-1/5">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <p className="text-gray-300">Email: sociolife@gmail.com</p>
                            <p className="text-gray-300">Phone: +880 123 456 789</p>
                        </div>
                    </div>
                </div>

                <div className="text-center py-4 bg-gray-900">
                    {/* Use the dynamic year, author, and project information */}
                    <p className="text-gray-300">&copy; {currentYear} All rights reserved by Sabrina Rashid</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;