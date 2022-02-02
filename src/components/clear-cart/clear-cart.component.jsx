import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';
import './clear-cart.styles.scss';

const ClearCartButton = ()=>{

    const dispatch = useDispatch();

    const handleClear = ()=>{
        if (window.confirm("Are you sure you want to clear the cart?") == true) {
            dispatch(clearCart());
          } 
    }

    return(
    <button className='clear-cart-button' type='button' onClick={handleClear}>
        Clear Cart
    </button>
    )
}

export default ClearCartButton;