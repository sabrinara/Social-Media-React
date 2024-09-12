import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import TopLikedPosts from "../../DashBoard/TopLikedPosts/TopLikedPosts";
import TopCommentedPosts from "../../DashBoard/TopCommentedPosts/TopCommentedPosts";
import Testimonials from "../Testimonials/Testimonials";
import ContactAndSupport from "../ContactAndSupport/ContactAndSupport";
import Banner from "../Banner/Banner";
import EventCalendar from "./EventCalendar/EventCalendar";
import RoadMap from "../RoadMap";

const Home = () => {
    const { user } = useAuth();
    console.log(user);


    return (
        <div>
            <Helmet>
                <title>SocioLife | Home</title>
            </Helmet>

            {/* Hello {user?.email} */}

            <div className=" ">
                <Banner />
                <RoadMap />

                <TopLikedPosts />

                <TopCommentedPosts />

                <EventCalendar />

                <Testimonials />

                <ContactAndSupport />
            </div>

        </div>
    );
};

export default Home;