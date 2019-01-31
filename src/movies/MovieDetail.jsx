import React,{PureComponent} from 'react';
import './MovieDetail.css';
import { connect } from 'react-redux';
import { fetchMovie } from './actions';



class MovieDetail extends PureComponent{

    constructor(props) {
        super(props);
        
        this.state = {
            movie: {
                name: "Kabali",
                synopsis: "Dummy Description",
                genre: "crime",
                crew: "Rajni, Kamal",
                cast: "Rajni, Anurag",
                runtime: 150,
                rating: "U",
                listingType: "now_showing"
            }
        }
    }
    componentWillMount() {
        this.props.fetchMovie(this.props.match.params.id)
    }

    showProgress() {
        return (
          <div className="loading-sign">Loading...</div>
        );
    }
    
    showError() {
        return (
            <div className="loading-sign">Error... Something Went Wrong</div>
        );
    }
    render() { 
        return (

            <div class="movieDetailsPage-wrapper">
                { this.props.movie.fetching ? this.showProgress() : this.props.movie.error ? this.showError() : this.renderMovieDetails() }
            </div>
        )
        
    }
    renderPage() {

    }
    renderMovieDetails(){
        let styles = {
            backgroundImage: `url(https://img.spicinemas.in/resources/images/movies/${this.props.movie.details.slug}/1000x320.jpg)`
        }
        return (
            <div className="details-wrapper">
                <div className="details-movieinfo">
                    <div className="details-movietitle">
                        <h1>
                            {this.props.movie.details.name}
                        </h1>
                        <span className="details-movierating">
                            {this.props.movie.details.grade}
                        </span>
                        <span className="details-language">
                        {this.props.movie.details.language}
                        </span>
                    </div>
                    <div className="details-type">
                        <span className="label">
                            NOW RUNNING
                        </span>
                    </div>
                </div>

                <div className="details-cover" style={styles}>
                </div>
                <div class="details-content">
                    <div className="details-synopsis">
                    <h2> Synopsis </h2>
                    <p>{this.props.movie.details.synopsis}</p>
                    <p>
                        <strong>Genre</strong> : {this.props.movie.details.genre}
                    </p>
                    <p>
                        <strong>Crew</strong> : {this.props.movie.details.crew}
                    </p>
                    <p>
                        <strong>Cast</strong> : {this.props.movie.details.cast}
                    </p>
                    <p>
                        <strong>Runtime</strong> : {this.props.movie.details.duration}
                    </p>
                    </div>
                    <div className="details-bookbutton">
                        <button className="btn-book">
                        BOOK SEATS
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => ({
        movie: state.movie
    }),
    (dispatch) => ({
        fetchMovie: (id) => dispatch(fetchMovie(id))
    })
)(MovieDetail);