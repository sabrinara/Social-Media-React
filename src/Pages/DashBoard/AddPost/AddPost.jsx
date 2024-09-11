import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPost = () => {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    // const [videoUrl, setVideoUrl] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('access-token');
            const headers = { Authorization: `Token ${token}` };

            const formData = new FormData();
            formData.append('content', content);
            // formData.append('image', image);
            if (image) {
                formData.append('image', image);
            }
            // formData.append('video_url', videoUrl);

            const response = await axios.post(' https://social-media-drf.onrender.com/posts/add-post/', formData, {
                headers: {
                    ...headers,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                console.log('Post added successfully');
                // Handle success (e.g., redirect, show a success message)
                toast.success('Post added successfully');
                navigate('/posts/myPosts');
            } else {
                console.error('Failed to add post');
                // Handle error (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className='pt-20 flex justify-center'>
           
            <div style={{  margin: 'auto', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
            className=''
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }} className='text-3xl'>Add a New Post</h2>
               <div className='md:px-10 '>
               <form onSubmit={onSubmit}>
                    <label className='block mb-2' htmlFor="content">Content:</label>
                    <textarea
                    className='bg-gray-800'
                        id="content"
                        name="content"
                        value={content}
                        placeholder='Short description of your post'
                        onChange={(e) => setContent(e.target.value)}
                        style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px' }}
                    />

                    <label className='block mb-2' htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        style={{ marginBottom: '10px' }}
                    />

                    <br />

                    {/* <label htmlFor="videoUrl">Video URL:</label>
                    <input
                        type="text"
                        id="videoUrl"
                        name="videoUrl"
                        value={videoUrl}
                        placeholder='Optional'
                        onChange={(e) => setVideoUrl(e.target.value)}
                        style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px' }}
                    /> */}

                  <div className='flex justify-center'>
                  <button
                        type="submit"
                       
                    className='text-sky-900 font-bold bg-white  px-20 py-2 mt-6 mb-10 rounded'
                    >
                        Add Post
                    </button>
                  </div>
                </form>
               </div>
            </div>
        </div>
    );
};

export default AddPost;
