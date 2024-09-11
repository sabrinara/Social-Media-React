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
            //     `https:// https://social-media-drf.onrender.com/posts/comments/${postId}/`,
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
                `https://social-media-drf.onrender.com/posts/comments/${postId}/`,
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
        <div >
            <form onSubmit={handleAddComment}>
                <div className="flex justify-center items-center gap-2">
                    <input
                        type="text"
                        placeholder="Enter your comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className='w-3/4 md:w-2/3 p-2 border border-sky-950 bg-sky-50 rounded-md'
                    />
                    <button type="submit" className='hidden md:flex w-1/3 bg-sky-950 text-white px-4 py-3 rounded-md text-sm' >
                        Add Comment
                    </button>
                    <button type="submit" className='flex md:hidden w-1/4 bg-sky-950 text-white px-6 py-3 rounded-md text-sm' >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCommentComponent;
