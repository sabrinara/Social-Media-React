import { useQuery } from '@tanstack/react-query';

const useLoginUser = () => {
    const token = localStorage.getItem('access-token');

    const { refetch, data: userData = {} } = useQuery({
        queryKey: ['getUserDetails'],
        queryFn: async () => {
            const res = await fetch('https://social-media-drf.onrender.com/accounts/user_detail_view/', {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error('Error fetching user details');
            }

            return res.json();
        },
    });
    console.log(userData);

    return [userData, refetch];
};

export default useLoginUser;
