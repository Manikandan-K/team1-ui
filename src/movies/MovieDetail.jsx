import React,{PureComponent} from 'react';
import './MovieDetail.css';
import { connect } from 'react-redux';
import { fetchMovie } from './actions';
import { Link } from 'react-router-dom';


class MovieDetail extends PureComponent{

    constructor(props) {
        super(props);
        
        this.state = {
            isTrailerPopupActive: false
        }
        this.openTrailerPopup = this.openTrailerPopup.bind(this);
        this.closeTrailerPopup = this.closeTrailerPopup.bind(this);
    }
    componentWillMount() {
        if(this.props.match !== undefined) {
            this.props.fetchMovie(this.props.match.params.id)
        }
        
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

            <div className="movieDetailsPage-wrapper">
                { this.props.movie.fetching ? this.showProgress() : this.props.movie.error ? this.showError() : this.renderMovieDetails() }
            </div>
        )
        
    }
    renderPage() {

    }
    openTrailerPopup() {
        this.setState({isTrailerPopupActive: true});
    }
    closeTrailerPopup() {
        this.setState({isTrailerPopupActive: false});
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
                <div className="details-content">
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

                        <div>
                            <Link className="btn-book" to={`/movies/showtimes/${this.props.movie.details.id}`}>
                            BOOK SEATS
                            </Link>
                        </div>
                        <div>
                            <button className="btn-trailer" onClick={this.openTrailerPopup}>
                            <i className="fa fa-youtube-play"></i>Play Trailer
                            </button>
                        </div>
                        {
                        this.state.isTrailerPopupActive ? 
                            (   
                                <div className="popup-holder">
                                <div className="trailer-popup">
                                <button className="popup-close-btn" onClick={this.closeTrailerPopup}>
                                    <i className="fa fa-times"></i>
                                </button>
                                <div className="trailer">
                                    <iframe width="700" height="394" src={this.props.movie.details.trailer}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                </div>
                                </div>
                            ) : null
                        }
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