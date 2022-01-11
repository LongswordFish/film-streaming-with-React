import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/Cart-item.component";
import {selectPurchasedItems, selectRentedItems} from '../../redux/cart/cart.selectors';
import { useNavigate } from "react-router";
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { useDispatch,useSelector } from "react-redux";

const CartDropDown = ()=> {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const PurchaseItems=useSelector(selectPurchasedItems);
    const RentItems=useSelector(selectRentedItems);

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <div className="purchase-items">
                    {
                        PurchaseItems.length>0?
                        PurchaseItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} isPurchase = {true} />
                        ))
                        :<span className="empty-message">You didn't pick any movies to purchase.</span>
                    }
                </div>
                <div className="rent-items">
                    {
                        RentItems.length>0?
                        RentItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} isPurchase = {false}/>
                        ))
                        :<span className="empty-message">You didn't pick any movies to rent.</span>
                    }
                </div>
            </div>
            <CustomButton onClick={()=>{navigate('/checkout');dispatch(toggleCartHidden());} } >GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropDown;