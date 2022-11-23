import { http } from './api';
import apiSettings from './settings';

const { BASE_URL, API_KEY } = apiSettings;

export const fetchMovies = (page = 1) => {
    return http.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
};

export const fetchMoviesByRequest = (searchRequest, page = 1) => {
    return http.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${searchRequest}`
    );
};

export const fetchMoviesById = movieID => {
    return http.get(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`);
};

export const fetchCast = movieID => {
    return http.get(`${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`);
};

export const fetchReviews = movieID => {
    return http.get(`${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`);
};