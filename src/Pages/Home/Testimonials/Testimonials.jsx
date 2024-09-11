import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";
import useFetchReviews from "../../../Hooks/useFetchReviews";


const Testimonials = () => {
    const [reviews, isLoading, error, refetch] = useFetchReviews();
    // console.log(reviews);

    const [visibleReviews, setVisibleReviews] = useState(5);


    const loadMoreReviews = () => {
        setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5);
    };


    // Sort reviews by rating in descending order
    const sortedReviews = reviews ? reviews.sort((a, b) => b.rating - a.rating) : [];


    // Get the reviews to display based on visibleReviews state
    const displayedReviews = sortedReviews.slice(0, visibleReviews);

    return (
        <div>
             <div className="ml-10 md:w-3/12 mb-10 mt-20">
                <h2 className="text-3xl text-start uppercase border-t-4 border-sky-700 text-sky-500 font-bold py-2">User Experience!</h2>
            </div>
          
            {isLoading ? (
                // Show loading indicator
                <div>Loading...</div>
            ) : error ? (
                // Show error message
                <div>Error: {error.message}</div>
            ) : (
                // Show reviews carousel
                <>
                    <Swiper navigation={true} pagination={{ clickable: true }} className="mySwiper">
                        {displayedReviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="flex flex-col items-center mx-24 my-16">
                                    <Rating style={{ maxWidth: 200, color: "#38bdf8" }} value={review.rating} readOnly />
                                    <p className="py-8 text-lg">{review.message}</p>
                                    <h3 className="text-2xl text-sky-400">{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center">
                        {visibleReviews < sortedReviews.length && (
                            <Link to='all-reviews'>
                                <button
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
                                    onClick={loadMoreReviews}
                                >
                                    Load More Reviews
                                </button>
                            </Link>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Testimonials;