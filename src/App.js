import React, { Component } from 'react';

import './App.css';
import FavoriteMovies from './FavoriteMovies';
import Dashboard from './Dashboard';
const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};
const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  constructor(props){
    super(props)
    this.usersByMovie = {}
    profiles.forEach(profile => {
      const movieId = profile.favoriteMovieID;
      if(this.usersByMovie[movieId]) {
        this.usersByMovie[movieId].push(profile.userID)
      } else {
        this.usersByMovie[movieId] = [profile.userID]
      }
    })
  }
  render(){
    return (
      <div className="App">
        <header className='header'>
          <h1>Welcome to Udacity React Nanodegree Practicals</h1>
        </header>
        <div className='main'>
          <FavoriteMovies
          profiles={profiles} 
          users={users}
          movies={movies}/>
          <Dashboard
          profiles={profiles}
          users={users}
          movies={movies}
          usersByMovie={this.user}
          />
        </div>
      </div>
    );
  }
}

export default App;
