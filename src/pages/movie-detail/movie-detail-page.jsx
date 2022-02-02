import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

import CustomButton from "../../components/custom-button/custom-button.component";

import bigImage from "../../assets/images/extraction_big.webp";
import smallImage from "../../assets/images/extraction_small.webp";

import { selectItemInCart} from "../../redux/cart/cart.selectors";
import {selectMovieById} from "../../redux/movie/movie.selectors";
import { addItemToPurchaseItems, addItemToRentItems } from "../../redux/cart/cart.actions";


import './movie-detail-page.styles.scss';


const MovieDetailPage = () => {

    const params = useParams();
    const movie = useSelector(selectMovieById(params.movieid));
    
    const movieAlreadyInCart = useSelector(selectItemInCart(params.movieid));

    console.log(movieAlreadyInCart);

    const dispatch = useDispatch();

    const imageLocation = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=980:*";
    
    const handleRent = (item)=>{
        if(window.confirm(`Are you sure you want to rent the movie for $${movie.price_to_rent}?`)){
            console.log("yes");
            dispatch(addItemToRentItems(item));
        }else{
            console.log("no");
        }
        
    }

    const handlePurchase = item=>{
        if(window.confirm(`Are you sure you want to buy the movie for $${movie.price_to_purchase}?`)){
            dispatch(addItemToPurchaseItems(item));
        }else{
            console.log("no");
        }
        
    }
    
    return (
        <div id="movieDetail_page">
            <div id="containerInDetail" className="row">
                <div
                    className="bigPic"
                    style={{
                        backgroundImage: `url('${movie.large_picture}')`,
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

                        {
                            movieAlreadyInCart
                                ? (<div className="button-wrapper-in-detail">
                                    <CustomButton backgroundColor="red" >Movie already in cart</CustomButton>
                                    </div>)
                                : (
                                    <div className="button-wrapper-in-detail">
                                        <CustomButton backgroundColor="orange" onClick={()=>handleRent(movie)} >Rent for ${movie.price_to_rent} </CustomButton>
                                        <CustomButton backgroundColor="green" onClick={()=>handlePurchase(movie)} >Purchase for ${movie.price_to_purchase} </CustomButton>
                                    </div>
                                )
                        }
                    </div>
                    
                </div>
            </div>
       
        </div>
    );
}

export default MovieDetailPage;