import axios from 'axios';

export const PER_PAGE = 15;

const API_KEY = '43997901-59e2ef8a5969ad3162d77619c';
axios.defaults.baseURL = 'https://pixabay.com/api/'

export const searchPhotos = async (query, photosCurrentPage = 1) => {
    const response = await axios.get('', {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: PER_PAGE,
            page: photosCurrentPage,
        }
    });

    return response.data;
}