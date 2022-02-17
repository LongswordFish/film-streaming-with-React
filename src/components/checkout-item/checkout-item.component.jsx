import React from "react";
import { useDispatch } from "react-redux";
import './checkout-item.styles.scss';

import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="checkout-item">
            <div className="image-container checkout-item-block" >
                <img alt='image-in-checkout-page' src={item.small_picture} />
            </div>
            <span className="name checkout-item-block">{item.movie_title}</span>
            <span className="type checkout-item-block">
                <div className="value" >{item.type}</div>
            </span>
            <span className="price checkout-item-block" >{item.price_to_purchase}</span>

            <div className="remove-button" onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;