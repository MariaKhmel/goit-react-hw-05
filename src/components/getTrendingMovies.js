import axios from "axios";
// const key = "f4fc383e5974e2ac547a6b655d2da3b0";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        Authorization: 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGZjMzgzZTU5NzRlMmFjNTQ3YTZiNjU1ZDJkYTNiMCIsInN1YiI6IjY1NGMxNmFhNDFhNTYxMzM2YTI0OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrML7A2wgEuY19W-c15nANg6x6o7f5jv_k3EA8kmHGo'
    }
};


const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?language=en-US&page=1`, options);
    return response.data.results;

}

export default getTrendingMovies;