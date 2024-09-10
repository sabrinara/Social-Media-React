import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAllPost from '../../../../Hooks/useAllPost';
import useAuth from '../../../../Hooks/useAuth';
import useLoginUser from '../../../../Hooks/useLoginUser';

const LikeButton = ({ postId }) => {
    const [posts, refetch] = useAllPost();
    const [isLiked, setIsLiked] = useState(null);
    const token = localStorage.getItem('access-token');
  const [user] = useLoginUser();
    // console.log(user);

    useEffect(() => {
        const checkLikeStatus = async () => {
            try {
                const response = await axios.get(` https://social-media-drf.onrender.com/posts/like/check/${postId}/`, {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
                // setIsLiked(response.data.isLiked);
                setIsLiked(response.data.user_has_liked);
            } catch (error) {
                console.error('Error checking like status:', error.message);
            }
        };

        checkLikeStatus();
    }, [postId]);



    const handleLike = async () => {
        setIsLiked(true); // Update UI immediately
    
        try {
            const response = await axios.post(`https://social-media-drf.onrender.com/posts/like/create/${postId}/`, 
            {
                user: user.id,  
                post: postId     
            }, 
            {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
    
            // Check the response and handle any further actions if needed
            refetch();
            // Optionally handle further actions based on the response
    
        } catch (error) {
            console.error('Error liking post:', error.message);
            // Revert UI state if there's an error
            setIsLiked(false);
        }
    };
    

    const handleUnlike = async () => {
        try {
            const response = await axios.delete(` https://social-media-drf.onrender.com/posts/like/unlike/${postId}/`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            // console.log(response.data)

            if (response.status === 200) {
                setIsLiked(false);
                refetch();
            }
        } catch (error) {
            console.error('Error unliking post:', error.message);
        }
    };

    return (
        <div>
            {/* <div>
                {isLiked ? "Already Liked" : "No Liked"}
            </div> */}

            {/* <button
                onClick={handleLike}
                className={`bg-blue-500 text-white py-1 px-2 rounded mt-2`}
            >
                Like
            </button>

            <button
                onClick={handleUnlike}
                className={`bg-blue-500 text-white py-1 px-2 rounded mt-2`}
            >
                Unlike
            </button> */}

            <div>
                {isLiked ?
                    <button
                        onClick={handleUnlike}
                        className={`bg-blue-500 text-white py-1 px-2 rounded mt-2`}
                    >
                        Unlike
                    </button>
                    :
                    <button
                        onClick={handleLike}
                        className={`bg-blue-500 text-white py-1 px-2 rounded mt-2`}
                    >
                        Like
                    </button>
                }
            </div>
        </div>
    );
};

export default LikeButton;