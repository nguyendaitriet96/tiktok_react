import * as request from '~/ultils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const response = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
