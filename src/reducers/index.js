import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoriteReducer'

const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer
})
export default rootReducer;