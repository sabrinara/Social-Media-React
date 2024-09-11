import  {  useState } from 'react';
import axios from 'axios';
import EditPostModal from './EditPostModal/EditPostModal';
import useMyPost from '../../../Hooks/useMyPost';

const MyPosts = () => {
    // const [posts, setPosts] = useState([]);

    const [posts, refetch] = useMyPost();

    const [selectedPost, setSelectedPost] = useState(null);

    const openEditModal = (postId) => {
        setSelectedPost({ id: postId });
        document.getElementById('my_modal_3').showModal();
    };

    const closeEditModal = () => {
        setSelectedPost(null);
        document.getElementById('my_modal_3').close();
    };

    const handleDeletePost = async (postId) => {
        const token = localStorage.getItem('access-token');
        if (token) {
            try {
                const response = await axios.delete(` https://social-media-drf.onrender.com/posts/my-posts/delete/${postId}`, {
                    headers: { Authorization: `Token ${token}` },
                });

                if (response.status === 204) {
                    // Post deleted successfully
                    // const updatedPosts = posts.filter((post) => post.id !== postId);
                    // setPosts(updatedPosts);
                    refetch();
                } else {
                    // Handle deletion error
                    console.error('Error deleting post:', response.data);
                    // Consider displaying an error message to the user
                }
            } catch (error) {
                console.error('Error deleting post:', error);
                // Consider displaying an error message to the user
            }
        }
    };

    return (
        <div className=" md:px-20 py-4">
            {
                posts.length === 0 ? (
                    <div className="flex justify-center items-center h-[70vh]">
                        <h2 className="text-3xl font-bold my-20 text-center">No Posts</h2>
                    </div>
                )
                    : (
                        <h1 className="text-3xl font-bold my-8 text-center">My Posts</h1>
                    )
            }

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {Array.isArray(posts) && posts.map(post => (
                <div key={post.id} className="bg-white rounded-md shadow-md mb-4 p-10">
                    <p className="text-lg font-semibold mb-2">{post.content}</p>
                    {/* <p>Likes: {post.like_count}</p>
                    <p>Comments: {post.comment_count_value}</p> */}
                    <div className="flex justify-between">
                    <div className="flex items-center mb-2">
                        <span className="mr-2">{post.like_count} ❤️</span>
                        <span>{post.comment_count_value} 💬</span>
                    </div>
                    <div className="flex mt-2">
                        <button
                            onClick={() => openEditModal(post.id)}
                            className="text-sm bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                        <button
                            onClick={() => handleDeletePost(post.id)}
                            className="text-sm bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                    </div>
                    </div>
                    {/* <p>{post.image}</p> */}
                    {post.image && (
                        <img src={post.image} alt="Post Image" className="mt-2 rounded-md h-[70vh] w-[84vh]" />
                    )}
                    {post.video_url && (
                        <iframe
                            title={`Video for Post ${post.id}`}
                            width="100%"
                            height="315"
                            src={post.video_url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="mt-2 rounded-md"
                        ></iframe>
                    )}
                    
                </div>
            ))}
        </div>

            <div>
                <EditPostModal selectedPost={selectedPost} closeModal={closeEditModal} />
            </div>

        </div>
    );
};

export default MyPosts;