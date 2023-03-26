const key = '8b12c0ceb3cfe4a8f8add1cd3a977410'

const seriesRequests = {
  requestPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=3`,
  };

export default seriesRequests
