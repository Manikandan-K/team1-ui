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

    render(){
        let styles = {
            backgroundImage: "url(https://img.spicinemas.in/resources/images/movies/kabali/1000x320.jpg)"
        }
        return (
            <div className="details-wrapper">
                <div className="details-movieinfo">
                    <div className="details-movietitle">
                        <h1>
                            KABALI
                        </h1>
                        <span className="details-movierating">
                        U
                        </span>
                        <span className="details-language">
                        Tamil
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>
                        <strong>Genre</strong> : Crime
                    </p>
                    <p>
                        <strong>Crew</strong> : Crime
                    </p>
                    <p>
                        <strong>Cast</strong> : Crime
                    </p>
                    <p>
                        <strong>Runtime</strong> : Crime
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