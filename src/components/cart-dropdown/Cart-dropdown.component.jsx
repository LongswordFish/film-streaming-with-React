import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/Cart-item.component";
import {selectAllCartItems} from '../../redux/cart/cart.selectors';
import { useNavigate } from "react-router";
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { useDispatch,useSelector } from "react-redux";

const CartDropDown = ()=> {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const items = useSelector(selectAllCartItems);

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                     {
                        items.length>0?
                        items.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                        :<span className="empty-message">You don't have any movies in your cart now. </span>
                    }
            </div>
            <CustomButton onClick={()=>{navigate('/checkout');dispatch(toggleCartHidden());} } >GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropDown;