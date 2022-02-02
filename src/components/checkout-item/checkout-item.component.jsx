import React from "react";
import { useSelector,useDispatch } from "react-redux";
import './checkout-item.styles.scss';

import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item,isPurchase }) => {
    const dispatch = useDispatch();

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt='image-in-checkout-page' src={item.small_picture} />
            </div>
            <span className="name">{item.movie_title}</span>
            <span className="type">
                <div className="value" >{item.type}</div>
            </span>
            {
                isPurchase?<span className="price">{item.price_to_purchase}</span>:<span className="price">{item.price_to_rent}</span>
            }
            
            <div className="remove-button" onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;