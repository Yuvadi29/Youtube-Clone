import axios from 'axios';

const Base_Url = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': process.env.rapidapi_key,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const FetchAPI = async (url) => {
    const { data } = await axios.get(`${Base_Url}/${url}`, options);

    return data; 
}