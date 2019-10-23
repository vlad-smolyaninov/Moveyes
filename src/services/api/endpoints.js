export default {
  fetchMovieByName: ({ TMDBHost, TMDBApiKey, search }) =>
    `${TMDBHost}/3/search/movie?api_key=${TMDBApiKey}&query=${encodeURIComponent(search)}`,

  fetchGenres: ({ TMDBHost, TMDBApiKey }) => `${TMDBHost}/3/genre/movie/list?api_key=${TMDBApiKey}`
}
