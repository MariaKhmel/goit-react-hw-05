import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZjMzgzZTU5NzRlMmFjNTQ3YTZiNjU1ZDJkYTNiMCIsInN1YiI6IjY1NGMxNmFhNDFhNTYxMzM2YTI0OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrML7A2wgEuY19W-c15nANg6x6o7f5jv_k3EA8kmHGo'
    }
};

const getMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?language=en-US`, options);
    return response.data;

}

export default getMovieCast;