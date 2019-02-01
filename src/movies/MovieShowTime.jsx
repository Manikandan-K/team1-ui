import React from 'react';
import './MovieShowTime.css';
import { connect } from 'react-redux';
import { fetchMovieShowTimes } from './actions';

class MovieShowTime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentWillMount() {
        if (this.props.match !== undefined) {
            this.props.fetchMovieShowTimes(this.props.match.params.id)
        }
    }

    render() {
        const url='/movies/showtimes'+this.props.moviShowTime;

        return (
            <div className="show-time-wrapper">
                {this.props.showtimes.fetching ? this.showProgress() : this.props.showtimes.error ? this.showError() : this.renderShowtimesDetails()}
            </div>
        )
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

    bookTicket(movieShowTimeId){
        let tickets = 1;

    }

    renderShowtimesDetails() {
        return (
        <div className="show-time-wrapper">
            <h1>Show Time</h1>
            {/* <div>
                <div>Tickets</div>
                <div className="date-bar">

                </div>
            </div> */}

            <table className="showtimes-table">
                <tbody>
                    {
                        this.props.showtimes.showtimes.map((movieShowTime, key) =>
                        <tr key={key}>
                            <td>{movieShowTime.name}</td>
                            <td>{movieShowTime.cinema}, {movieShowTime.screen}</td>
                            <td>{movieShowTime.experiences}</td>
                            <td>{movieShowTime.movieDate}</td>
                            <td className="show-time">{movieShowTime.movieTime}</td>
                            <td><button className="book-ticket-btn" onClick={this.bookTicket(movieShowTime.id)}>Book Ticket</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
         
            
        )
    }
}

export default connect(
    (state) => ({
        showtimes: state.showtimes
    }),
    (dispatch) => ({
        fetchMovieShowTimes: (id) => dispatch(fetchMovieShowTimes(id))
    }))(MovieShowTime);