import { useQuery } from '@tanstack/react-query';

const useAPost = (postId) => {
    const token = localStorage.getItem('access-token');

    const { data: post, refetch, isLoading, error } = useQuery({
        queryKey: ['getPost', postId],
        queryFn: async () => {
            if (!postId) throw new Error('Post ID is required');
            const res = await fetch(` https://social-media-drf.onrender.com/posts/${postId}/`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            return res.json();
        },
        enabled: !!postId, // Ensure query is enabled only if postId is provided
    });

    return { post, refetch, isLoading, error };
};

export default useAPost;
