import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { clearCart } from "../../redux/cart/cart.actions";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectAllCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createOrderStart } from "../../redux/order/order.actions";

const apiUrl = process.env.REACT_APP_API_URL;

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KDKOlHWJmqNhsMx2gG5vGUeTxJibnt1PWacGnBO5Y5U6Z4qCbMXEFSc1M1QOSNQmMKCSleprSbD9P0tbvKuFqYA00DARgWOjY";
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const allItems = useSelector(selectAllCartItems);

    const currentUser = useSelector(selectCurrentUser);

    const onToken = async(token) => {
        try{
            const token_id = token.id;
            await axios({
                url:`${apiUrl}/api/checkout`,
                method:'post',
                data:{
                    amount:priceForStripe,
                    token:token_id
                }
            });
            alert('payment received!');

            let orderItems = [];
            allItems.forEach(item=>{
                let orderItem={...item,film_id:item.id};
                orderItems.push(orderItem);
            })

            let newOrder={
                customerEmail:currentUser.username,
                total:price,
                orderItems
            }

            dispatch(createOrderStart(newOrder));
            dispatch(clearCart());
            navigate('/user/order/listing');

        }catch(error){
            alert('there was an issue with the payment, please use the provided credit card')
        }
        
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