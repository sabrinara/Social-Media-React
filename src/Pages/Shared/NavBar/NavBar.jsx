import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Redirect the user to the login page or any other appropriate page after logout
            })
            .catch(error => console.log(error));
    }

    const navOptions = (
        <ul className="flex items-center">
            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>

            {user ? (
                <li onClick={handleLogOut}><Link to="/" className="text-white hover:text-gray-300">LogOut</Link></li>
            ) : (
                <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
            )}
        </ul>
    );

    return (
        <div>
            <div className="navbar bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        <ul tabIndex={0} className="text-black menu menu-compact dropdown-content mt-3 p-2 bg-gray-800 rounded-box ">
                            {navOptions}
                        </ul>
                    </div>

                    <Link to='/' >
                    <div className='flex items-center gap-2'>
                        <img src="./logo.png" alt="logo" className='w-10 ' />
                        <h1 className="text-xl font-bold">
                            <span className="text-sky-500">S</span><span className="text-green-500">o</span><span className="text-red-500">c</span><span className="text-yellow-400">i</span><span className="text-teal-300">o</span><span className="text-orange-500">L</span><span className="text-violet-400">i</span><span className="text-blue-300">f</span><span className="text-amber-500">e</span></h1>
                            
                    </div>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user && <Link to='details' className="text-white hover:text-gray-300 mr-4">User Details</Link>}
                    {user && <Link to='posts' className="text-white hover:text-gray-300">DashBoard</Link>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
