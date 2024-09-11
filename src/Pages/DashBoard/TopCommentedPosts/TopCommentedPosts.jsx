import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; 
import Marquee from 'react-fast-marquee';

const TopCommentedPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://social-media-drf.onrender.com/posts/commented-posts/top/');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();


                const filteredData = data
                    .filter((post) => post.comment_count_value > 0)
                    .map((post) => ({
                        id: post.id,
                        comment_count_value: post.comment_count_value,
                        title: post.title || '',
                        image: post.image,
                        created_at: post.created_at,
                        updated_at: post.updated_at,
                        content: post.content,
                    }));


                const sortedData = filteredData.sort((a, b) => a.comment_count_value - b.comment_count_value);

                setPosts(sortedData);
                console.log(sortedData);
            } catch (error) {
                console.error('Error fetching top commented posts:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='my-10 md:my-20'>
            <div className="ml-10 md:w-4/12 my-10">
                <h2 className="text-3xl text-start uppercase border-t-4 border-sky-700 text-sky-500 font-bold py-2">Top Commented Posts</h2>
            </div>
            {/* <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                effect="coverflow" // Use the coverflow effect
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                style={{ height: '300px' }}
            >
                {posts.map(post => (
                    <SwiperSlide key={post.id}>
                        <img
                            src={`https://social-media-drf.onrender.com${post.image}`}
                            alt={`Commented Post ${post.id}`}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper> */}
            <Marquee className='mt-2 '>
                {posts.map((post) => (
                    <div key={post.id} className="flex flex-col mx-5 justify-center items-center transform hover:scale-105 transition-transform duration-30">
                        <div className="px-3 bg-neutral-900 h-[20rem] rounded-full md:w-80 hover:bg-sky-950">
                            <div className="relative">
                                <img src={`https://social-media-drf.onrender.com${post.image}`} alt={`Commented Post ${post.id}`} className="rounded-full h-[19rem] w-80" />
                            </div>
                        </div>
                        <div className="pt-4 px-10 text-center">
                            <h1 className="text-xl font-bold text-sky-950">{post.content}</h1>
                            {/* <p>{post.content}</p> */}
                        </div>

                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TopCommentedPosts;
