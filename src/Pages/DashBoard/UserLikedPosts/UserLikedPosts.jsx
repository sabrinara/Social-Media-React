import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserLikedPosts = () => {
    const [likedPosts, setLikedPosts] = useState([]);
    const token = localStorage.getItem('access-token');

    useEffect(() => {
        const fetchLikedPosts = async () => {
            try {
                const response = await axios.get(' https://social-media-drf.onrender.com/posts/user/liked-posts/', {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });

                if (response.status === 200) {
                    setLikedPosts(response.data);
                }
            } catch (error) {
                console.error('Error fetching liked posts:', error.message);
            }
        };

        fetchLikedPosts();
    }, [token]);

    return (
        <div>

            <div>
                {
                    likedPosts.length === 0 ? (
                        <div className="text-2xl font-bold py-20 flex justify-center items-center h-[70vh]">
                            <h1> No liked posts found. </h1>
                        </div>
                    )
                        : <h1 className="text-3xl font-bold pt-10  text-center">My Liked Posts</h1>
                }
            </div >
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 py-10 gap-4">
            {likedPosts.map((post) => (
              <div key={post.id} className="bg-sky-50 rounded-lg shadow-md p-8">
                <img src={post.image} alt={post.content} className="w-full h-[80vh] object-cover rounded-md mb-4" />
              <div className="flex justify-between items-center " >
              <h3 className="text-lg font-semibold mb-2">{post.content}</h3>
              <p className="text-gray-600 text-sm">{`Posted by ${post.user.first_name} ${post.user.last_name}`}</p>
              </div>
              <div className="flex justify-between">
              <p className="text-gray-600 text-lg">{`❤️ ${post.like_count}`}</p>
              <p className="text-gray-600 text-lg">{` 💬 ${post.comment_count_value}`}</p>
              </div>
              </div>
            ))}
          </div>
          
        </div >
    );
};

export default UserLikedPosts;
