import React from "react";
import './cart-item.styles.scss';
import image1 from "../../assets/images/extraction_small.webp";

const CartItem = ({item})=>{
    const {movie_title,price_to_rent,price_to_purchase,small_picture,isPurchase} = item;
    
    return (
    <div className="cart-item">
        <img alt='item_in_cart' src={image1}/>
        <div className="item-details">
            <span className="name">{movie_title}</span>

            {
                isPurchase?
                (<span className="price">${price_to_purchase}</span>)
                :(<span className="price">${price_to_rent}</span>)
            }

            
        </div>
    </div>
    )
};

export default CartItem;