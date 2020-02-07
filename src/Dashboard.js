import react, { Component } from 'react';
import MovieCard from 'MovieCard';
class Dashboard extends Component{
    render() {
        const { users, profiles,movies,usersByMovie } = this.props;
        const movieCard = object.keys(movies).map(id => (
            <MovieCard 
             key={id}
             users={users}
             usersWhoLikedMovie = {usersByMovie}
             movieInfo = {movies[id]}
            />
        ))
        // return JSX
        return <ul>{movieCard}</ul>
    }
}
export default Dashboard;