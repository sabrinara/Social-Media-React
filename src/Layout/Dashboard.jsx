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

            <div className=" bg-sky-950 min-h-screen ">
               

                    <div>
                        <Outlet />
                    </div>
               
            </div>
            
        </div>
    );
};

export default Dashboard;