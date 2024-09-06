import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import DashNavBar from '../Pages/DashBoard/DashNavBar/DashNavBar';

const Dashboard = () => {

    return (
        <div>
            <Helmet>
                <title>SocioLife | DashBoard</title>
            </Helmet>

            <DashNavBar />

            <div className="flex bg-sky-950">
                {/* Left Side */}
                <div className="md:w-1/6 bg-black md:p-4">
                    {/* Add content for the left side */}
                    <div className='flex items-center justify-center'>
                    </div>
                </div>

                {/* Middle Side */}
                <div className="md:w-3/4  md:p-4">

                    <div>
                        <Outlet />
                    </div>
                </div>

                {/* Right Side */}
                <div className="md:w-1/6 bg-black md:p-4">
                    {/* Add content for the right side */}
                    <div className='flex items-center justify-center'>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;