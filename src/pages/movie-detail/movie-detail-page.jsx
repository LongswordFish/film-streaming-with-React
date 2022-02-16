import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import CustomButton from "../../components/custom-button/custom-button.component";

import { selectItemInCart} from "../../redux/cart/cart.selectors";
import {selectSingleFilm} from "../../redux/movie/movie.selectors";
import { addItemToPurchaseItems, addItemToRentItems } from "../../redux/cart/cart.actions";
import { getSingleFilmStart } from "../../redux/movie/movie.action";

import './movie-detail-page.styles.scss';


const MovieDetailPage = () => {

    const params = useParams();
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSingleFilmStart(params.movieid));
    },[dispatch,params.movieid]);

    const movie = useSelector(selectSingleFilm(params.movieid));
    
    const movieAlreadyInCart = useSelector(selectItemInCart(params.movieid));

    console.log(movieAlreadyInCart);
    

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
        movie?
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
        :null
    );
}

export default MovieDetailPage;