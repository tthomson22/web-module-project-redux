import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props;
    
    const deleteFavoriteClick = (id) => {
        removeFavorite(id)
    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={()=>deleteFavoriteClick(movie.id)}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapState = (state) => {
    return{
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapState, { removeFavorite })(FavoriteMovieList);