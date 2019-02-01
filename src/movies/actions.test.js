
import fetchMovies, { fetchMovieShowTimes, NOW_SHOWING, FETCH_MOVIES_PROGRESS, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../movies/actions';
import { FETCH_MOVIE_SUCCESS, fetchMovie, FETCH_MOVIE_FAILURE, FETCH_MOVIE_PROGRESS, FETCH_SHOWTIMES_FAILURE, FETCH_SHOWTIMES_PROGRESS, FETCH_SHOWTIMES_SUCCESS } from '../movies/actions';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

const mockStore = configureMockStore([thunk])
const mock = new MockAdapter(axios);
let store;
const apiData = [{ "id": 1, "name": "Kabali", "experiences": "RDX, Dolby Atmos, SUB", "listingType": "NOW_SHOWING", "slug": "kabali" },
{ "id": 2, "name": "Sultan", "experiences": "RDX, Dolby Atmos, SUB", "listingType": "NOW_SHOWING", "slug": "sultan" }]

const apiDataUpcoming = [{ "id": 3, "name": "Kabali", "experiences": "RDX, Dolby Atmos, SUB", "listingType": "UPCOMING", "slug": "kabali" },
{ "id": 4, "name": "Sultan", "experiences": "RDX, Dolby Atmos, SUB", "listingType": "UPCOMING", "slug": "sultan" }]

const movieData = {
  name: "Kabali",
  slug: "kabali"
}

const movieShowtimesData = [{"movieId":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","movieDate":"2019-02-01","movieTime":"11:30:00"},
{"movieId":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","movieDate":"2019-02-02","movieTime":"11:30:00"},
{"movieId":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","movieDate":"2019-02-03","movieTime":"11:30:00"},
{"movieId":1,"name":"Kabali","experiences":"RDX, Dolby Atmos, SUB","movieDate":"2019-02-04","movieTime":"11:30:00"}]

describe("movies/actions", () => {
  beforeEach(() => {
    store = mockStore({})
  });

  it('should fetch movies from server which are now-showing and return FETCH_MOVIES_SUCCESS', async (done) => {
    mock
      .onGet('http://localhost:9090/movies/now-showing')
      .reply(200, apiData);

    let expectedActions = []
    
    store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_MOVIES_SUCCESS,
        payload: apiData
      });
      done();
    });
  });

  it('should fetch movies from server which are upcoming and return FETCH_MOVIES_SUCCESS', async (done) => {
    mock
      .onGet('http://localhost:9090/movies/upcoming')
      .reply(200, apiDataUpcoming);

    let expectedActions = []
    
    store.dispatch(fetchMovies('upcoming')).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_MOVIES_SUCCESS,
        payload: apiDataUpcoming
      });
      done();
    });
  });

  it('should return FETCH_MOVIES_FAILURE if http 500', async (done) => {
    mock
      .onGet('http://localhost:9090/movies/now-showing')
      .reply(500, {});
    let expectedActions = []
    store.dispatch(fetchMovies('now-showing')).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIES_PROGRESS });
      expect(store.getActions()[1]).toEqual({ type: FETCH_MOVIES_FAILURE });
      done();
    });
    
  });
})

describe("movieDetails/actions", () => {
  beforeEach(() => {
    store = mockStore({})
  });

  it('should fetch movie details from server and return FETCH_MOVIE_SUCCESS', async (done) => {
    mock
      .onGet('http://localhost:9090/movies/details/1')
      .reply(200, movieData);

    let expectedActions = []
    
    store.dispatch(fetchMovie(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIE_PROGRESS });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_MOVIE_SUCCESS,
        payload: movieData
      });
      done();
    });
  });


  it('should return FETCH_MOVIE_FAILURE if http 500', async (done) => {
    mock
      .onGet('http://localhost:9090/movies/details/1')
      .reply(500, {});
    let expectedActions = []
    store.dispatch(fetchMovie(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_MOVIE_PROGRESS });
      expect(store.getActions()[1]).toEqual({ type: FETCH_MOVIE_FAILURE });
      done();
    });
    
  });
})

describe("moviShowTime/actions", () => {
  beforeEach(() => {
    store = mockStore({})
  });

  it('should fetch movie showtime details from server and return FETCH_SHOWTIMES_SUCCESS', async (done) => {
    mock
      .onGet('http://localhost:9090/movies/showtimes/1')
      .reply(200, movieShowtimesData);

    let expectedActions = []
    
    store.dispatch(fetchMovieShowTimes(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_SHOWTIMES_PROGRESS });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_SHOWTIMES_SUCCESS,
        payload: movieShowtimesData
      });
      done();
    });
  });


  it('should return FETCH_MOVIE_FAILURE if http 500', async (done) => {
    mock
      .onGet('http://localhost:9090/movies/showtimes/1')
      .reply(500, {});
    let expectedActions = []
    store.dispatch(fetchMovieShowTimes(1)).then(() => {
      expect(store.getActions()[0]).toEqual({ type: FETCH_SHOWTIMES_PROGRESS });
      expect(store.getActions()[1]).toEqual({ type: FETCH_SHOWTIMES_FAILURE });
      done();
    });
    
  });
});
