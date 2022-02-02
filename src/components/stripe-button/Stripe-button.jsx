import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KDKOlHWJmqNhsMx2gG5vGUeTxJibnt1PWacGnBO5Y5U6Z4qCbMXEFSc1M1QOSNQmMKCSleprSbD9P0tbvKuFqYA00DARgWOjY";

    const dispatch = useDispatch();

    const onToken = token => {
        
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        })
        .then(response=>{
            alert('payment received!');
            dispatch(clearCart());
        } )
        .catch(err=>alert('there was an issue with the payment, please use the provided credit card'));
    }

    return (<StripeCheckout 
    label = 'Pay Now'
    name='FishStreaming Store'
    billingAddress
    shippingAddress
    description={`Your price is ${price}`}
    amount = {priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
    />)
}

export default StripeCheckoutButton;