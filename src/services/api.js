import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "64c94fbe68ed52f3b9501ee77696ee42";


export async function getTrendingMovies() {
    const response = await axios(`/trending/movie/day?api_key=${API_KEY}`);
    console.log(response.data);
    return response.data;
};

export async function searchMovies(query) {
    const response = await axios(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data;
};

export async function getDetails(movieId) {
    const response = await axios(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
};

export async function getActors(movieId) {
    const response = await axios(`/search/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
};

export async function getReviews(movieId) {
    const response = await axios(`/search/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
};