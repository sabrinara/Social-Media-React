import React, { useState } from 'react';
import axios from 'axios';
import useLoginUser from '../../../../../Hooks/useLoginUser';

const AddCommentComponent = ({ postId, fetchComments }) => {
    const [newComment, setNewComment] = useState("");
    const token = localStorage.getItem('access-token');
    const [user] = useLoginUser();

    const handleAddComment = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // postId = parseInt(postId, 10);
        // console.log(typeof(postId));

        try {
            const payload = {
                content: newComment,
            };

            console.log(payload)
            console.log(typeof (payload))

            // console.log(typeof (postId))
            // postId = parseInt(postId)
            // console.log(typeof (postId))

            // const response = await axios.post(
            //     `https:// http://127.0.0.1:8000/posts/comments/${postId}/`,
            //     // payload,
            //     JSON.stringify(payload),
            //     {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             Authorization: `Token ${token}`,
            //         },
            //     }
            // );

            const response = await axios.post(
                ` http://127.0.0.1:8000/posts/comments/${postId}/`,
                {
                    user: user.id,  
                    post: postId,
                    content: newComment    
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`,
                    },
                }
            );

            console.log('Response:', response);

            if (response.status === 201) {
                fetchComments();
                setNewComment("");
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error adding comment:', error.message);
        }
    };

    return (
        <form onSubmit={handleAddComment}>
            <input
                type="text"
                placeholder="Enter your comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">
                Add Comment
            </button>
        </form>
    );
};

export default AddCommentComponent;
