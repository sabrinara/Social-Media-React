import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useTopLikedPosts from '../../../Hooks/useTopLikedPosts';

const TopLikedPosts = () => {
    // const [topLikedPosts, setTopLikedPosts] = useState([]);
    // const token = localStorage.getItem('access-token');

    const [topLikedPosts, refetch] = useTopLikedPosts();

    // useEffect(() => {
    //     const fetchTopLikedPosts = async () => {
    //         try {
    //             const response = await axios.get(' https://social-media-drf.onrender.com/posts/liked-posts/top/', {
    //                 // headers: {
    //                 //     Authorization: `Token ${token}`,
    //                 // },
    //             });

    //             if (response.status === 200) {
    //                 setTopLikedPosts(response.data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching top liked posts:', error.message);
    //         }
    //     };

    //     fetchTopLikedPosts();
    // }, []);

    return (
        <div className='mx-10'>
            <div>

                <div className='my-10'>
                <div className=" md:w-3/12 mb-10 mt-20">
                <h2 className="text-3xl text-start uppercase border-t-4 border-sky-700 text-sky-500 font-bold py-2">Top Liked Posts</h2>
            </div>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        navigation
                        pagination={{ clickable: true }}
                        style={{ height: '300px' }}
                    >
                        {topLikedPosts.map(post => (
                            <SwiperSlide key={post.id}>
                                <img
                                    src={post.image}
                                    alt={`Liked Post ${post.id}`}
                                    style={{
                                        objectFit: 'cover',
                                        // maxWidth: '100%'
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TopLikedPosts;
