import React from "react";
import './cart-item.styles.scss';

const CartItem = ({item})=>{
    const {movie_title,price_to_rent,price_to_purchase,small_picture,isPurchase} = item;
    
    return (
    <div className="cart-item">
        <img alt='item_in_cart' src={small_picture}/>
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