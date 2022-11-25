import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': '1020f2fcefmshcd10abc0ed5265dp12f47djsnd465d8ccd5e1',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


