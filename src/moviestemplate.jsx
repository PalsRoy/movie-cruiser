import React, {Component} from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getMovies,addFavourite} from './actions/moviesActions';
import FetchFailure from './fetchFailure';
import AddFailure from './addFailure';


class MoviesTemplate extends Component {

constructor(){
super();
this.handleClick = this.handleClick.bind(this);
}

componentDidMount(){
  this.props.getMovies();
}

handleClick(event,id){
event.preventDefault();
this.props.addFavourite(id);
}

render(){
const { movies ,hasFailedToFetch, favourites,hasFailedAddFavourite} = this.props;

return(
<div>
<div className="container">
		<div className="row">
			<div className="col-12 col-md-6">
				<h2>Movies</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Desc</th>
              <th>Poster</th>
              <th>Add to Favourite</th>
            </tr>
          </thead>
          <tbody>
          {movies && movies.map(movie =>
            <tr>
              <td>{movie.title}</td>
              <td>{movie.overview}</td>
              <td>{movie.posterPath}</td>
              <td><button onClick={(event) => this.handleClick(event,movie.id)} className="btn btn-primary">Add Favourite</button></td>
            </tr>
           )}
          </tbody>
        </table>

			</div>
			<div className="col-12 col-md-6">
				<h2>Favourites</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Desc</th>
              <th>Poster</th>
            </tr>
          </thead>
          <tbody>
          {favourites && favourites.map(favourite =>
            <tr>
              <td>{favourite.title}</td>
              <td>{favourite.overview}</td>
              <td>{favourite.posterPath}</td>
            </tr>
           )}
          </tbody>
        </table>
			</div>
		</div>
	</div>
  {hasFailedToFetch && (
    <FetchFailure stylingProperty="fetchFailureClass"/>
   )}
   {hasFailedAddFavourite && (
     <AddFailure stylingProperty="fetchFailureClass"/>
    )}
</div>
);
}
}

function mapDispatchToStore(dispatch){
 return bindActionCreators({getMovies,addFavourite},dispatch);
}

function mapStateToProps(state){
  return{
  movies: state.moviesReducer.movies,
  favourites: state.moviesReducer.favourites,
  hasFailedToFetch : state.moviesReducer.fetchFailure,
  hasFailedAddFavourite: state.moviesReducer.addFailure
  };
}

export default connect(mapStateToProps,mapDispatchToStore)(MoviesTemplate);
