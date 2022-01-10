import React from "react";
import { useParams } from "react-router-dom";
import {selectMovieById} from "../../redux/movie/movie.selectors";
import { useSelector } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";

import bigImage from "../../assets/images/extraction_big.webp";
import smallImage from "../../assets/images/extraction_small.webp";
import './movie-detail-page.styles.scss';


const MovieDetailPage = () => {

    const params = useParams();
    const movie = useSelector(selectMovieById(params.movieid));

    const imageLocation = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=980:*";
    return (
        <div id="movieDetail_page">
            <div id="containerInDetail" className="row">
                <div
                    className="bigPic"
                    style={{
                        backgroundImage: `url('${imageLocation}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '600px'
                    }}>

                    <div className="cardInDetail">
                        <p className="titileInDetail">{movie.movie_title}</p>
                        <p className="movieType">Movie Type: {movie.movie_type}</p>
                        <p className="desInDetail">{movie.description}</p>
                        <div className="button-wrapper-in-detail">
                            <CustomButton backgroundColor="orange">Rent for ${movie.price_to_rent} </CustomButton>
                            <CustomButton backgroundColor="green">Purchase for ${movie.price_to_purchase} </CustomButton>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MovieDetailPage;