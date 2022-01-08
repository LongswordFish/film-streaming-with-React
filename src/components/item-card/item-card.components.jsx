import react from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/extraction_small.webp";

import "./item-card.styles.scss";

//`../../assets/images/${small_picture}`

const ItemCard = ({item})=>{
    const{price_to_rent,price_to_purchase,small_picture,movie_title,id} = item;

    return(
        <div className="item-card">
            <p className="card-text" >
                <span>Rent:${price_to_rent }</span>
                <span>Buy:${price_to_purchase }</span>
            </p>
            <Link to={`/movie/movies/${id}`}><img src={image1} className="card-img" alt="..." /></Link>
            <div className="card-body">
                <h5 class="card-title">{movie_title }</h5>
            </div>
        </div>
    );
}

export default ItemCard;