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


    return (
        <div className='mx-10'>
            <div>

                <div className='my-10'>
                    <div className=" md:w-3/12 mb-10 mt-20">
                        <h2 className="text-3xl text-start uppercase border-t-4 border-sky-700 text-sky-500 font-bold py-2">Top Liked Posts</h2>
                    </div>

                    <div className='hidden md:flex'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            // navigation
                            // pagination={{ clickable: true }}
                            style={{ height: '600px' }}

                        >
                            {topLikedPosts.map(post => (
                                <SwiperSlide key={post.id}>
                                    <img
                                        src={post.image}
                                        alt={`Liked Post ${post.id}`}
                                        title='Move Left or Right'
                                        style={{
                                            objectFit: 'cover',
                                            // maxWidth: '100%'
                                            width: '100%',
                                            height: '100vh',
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='md:hidden'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            // navigation
                            // pagination={{ clickable: true }}
                            style={{ height: '300px' }}

                        >
                            {topLikedPosts.map(post => (
                                <SwiperSlide key={post.id}>
                                    <img
                                        src={post.image}
                                        alt={`Liked Post ${post.id}`}
                                        title='Move Left or Right'
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
        </div>
    );
};

export default TopLikedPosts;
