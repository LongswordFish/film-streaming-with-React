import React from "react";
import { useSelector } from "react-redux";

import './checkout-page.styles.scss';
import { Link } from "react-router-dom";

import { selectCartItemsTotal, selectCartItemsCount,selectAllCartItems } from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from "../../components/stripe-button/Stripe-button";
import ClearCartButton from "../../components/clear-cart/clear-cart.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const CheckoutPage = () => {

    const total = useSelector(selectCartItemsTotal);
    const count = useSelector(selectCartItemsCount);
    const items = useSelector(selectAllCartItems);

    const user = useSelector(selectCurrentUser);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span></span>
                </div>
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
                items.length ?
                items.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
                    :
                    <div>You don't have any movie in cart yet. Do you want to purchase anything? Click <Link to='/movies'>here</Link> to shop</div>

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
                        {
                            user?
<                           StripeCheckoutButton price={total} />
                            :<Link to="/user/signin">    
                                <button className='sign-in-button' type='button'>
                                    Sign In First
                                </button> 
                            </Link>
                            
                        }
                        
                        <ClearCartButton /> 
                    </div>
                )
                :null
            }



        </div>
    );
};


export default CheckoutPage;