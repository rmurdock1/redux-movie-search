import React, { PropTypes, Component } from 'react'

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {
		this.props.theSearchChanged(event.target.value);
	}

	componentDidMount() {
		// doesn't do anything at this point
		this.props.itDidMount();
	}

	render() {
		const movies = this.props.movies.map((movie) => {
			return <li key={movie.imdbID}>{movie.Title}</li>
		});

		return (
			<div>
				<input type="text" onChange={this.onSearch}/>
				<h1> Movie List </h1>

				{this.props.requestPending &&
					<h3> Request Pending </h3>
			 	}

				{this.props.isError && this.props.errorMessage &&
					<h3> {this.props.errorMessage} </h3>
			 	}

				{!this.props.requestPending &&
					<div>
						<ul>
							{movies}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

MovieList.propTypes = {
	theSearchChanged: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	itDidMount: PropTypes.func
};

export default MovieList;
