import React from "react";
import { useSelector } from "react-redux";

import './checkout-page.styles.scss';
import { Link } from "react-router-dom";

import { selectPurchasedItems, selectRentedItems, selectCartItemsTotal, selectCartItemsCount } from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from "../../components/stripe-button/Stripe-button";
import ClearCartButton from "../../components/clear-cart/clear-cart.component";



const CheckoutPage = () => {

    const purchasedItems = useSelector(selectPurchasedItems);
    const rentedItems = useSelector(selectRentedItems);
    const total = useSelector(selectCartItemsTotal);
    const count = useSelector(selectCartItemsCount);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Movie Title</span>
                </div>
                <div className="header-block">
                    <span>Type</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                purchasedItems.length ?
                purchasedItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} isPurchase={true}/>)
                    :
                    <div>You don't have anything of purchasing in cart yet. Do you want to purchase anything? Click <Link to='/movies'>here</Link> to shop</div>

            }

            {
                rentedItems.length ?
                rentedItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
                    :
                    <div>You don't have anything to rent in cart yet. Do you want to rent anything? Click <Link to='/movies'>here</Link> to shop</div>

            }

            <div className="total">TOTAL: ${total}</div>
            {
                count?
                (
                    <div className="testing-credit-card">Please use the following credit card number to test this application: 4242 4242 4242 4242</div>
                )
                :null
            }

            {
                count?
                (
                    <div className="button-wrapper-in-checkout">
                        <StripeCheckoutButton price={total} />
                        <ClearCartButton /> 
                    </div>
                )
                :null
            }



        </div>
    );
};


export default CheckoutPage;