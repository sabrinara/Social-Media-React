// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Comments from './Comments/Comments';
import LikeButton from './LikeButton/LikeButton';
import useAllPost from '../../../Hooks/useAllPost';


const AllPosts = () => {
    // const [posts, setPosts] = useState([]);

    const [posts] = useAllPost();
    console.log(posts);


    return (
        <div className='md:px-40'>

            <div className="w-full md:p-6 grid grid-cols-1  gap-4">
                {/* <h1 className="text-2xl text-center font-bold mb-4">All Posts</h1> */}

                {Array.isArray(posts) && posts.map(post => (
                    <div key={post.id} className="bg-white p-4 shadow-md rounded-md flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 md:ml-8 my-8">
                            <p className="text-lg font-semibold mb-1 text-sky-950">{post.user.first_name} {post.user.last_name}</p>
                            <p className="text-gray-400">{post.content}</p>
                            {post.image && (
                                <img src={post.image} alt="Post Image" className="mt-2 rounded-md h-[55vh] w-full" />
                            )}
                            {post.video_url && (
                                <iframe
                                    title={`Video for Post ${post.id}`}
                                    width="100%"
                                    height="315"
                                    src={post.video_url}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="mt-2 rounded-md"
                                ></iframe>
                            )}
                           <div className="flex justify-between items-center">
                           <p className="mr-2 text-lg font-semibold my-2 text-sky-950">{post?.like_count} ❤️</p>
                            <LikeButton postId={post.id} />

                           </div>
                        </div>

                        <div className="w-full md:w-1/2 mb-8 md:my-8 md:mx-10 md:mt-16">
                            <Comments postId={post.id} />
                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
};

export default AllPosts;
