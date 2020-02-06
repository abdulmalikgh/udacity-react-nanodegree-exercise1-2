import React, { Component } from 'react';

class FavoriteMovies extends Component{
 render(){
     const { profiles, users,movies } = this.props;
     return (
         <ul>
            { profiles.map( (profile) => (
              <li key={profile.id}>
                  {users[profile.userID].name} 's favorite movie is {movies[profile.favoriteMovieID].name}
              </li>  
             ))
            }
         </ul>
     )
 }
}
export default FavoriteMovies;