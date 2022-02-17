import "./order-listing.styles.scss";
import OrderItem from "../../components/order-item/order-item.component";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { getOrdersStart } from "../../redux/order/order.actions";
import { selectOrders } from "../../redux/order/order.selectors";


const OrderListing = ()=>{

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getOrdersStart());
    },[dispatch]);

    const orders = useSelector(selectOrders);

    return (
        <div className="order-page">
            <div className="order-header">
                <div className="header-block">
                    <span>Order Id</span>
                </div>
                <div className="header-block">
                    <span>Order Total</span>
                </div>
                <div className="header-block">
                    <span>Order Date</span>
                </div>
                <div className="header-block">
                    <span></span>
                </div>
            </div>
            {
                orders.length==0?
                <h1>You don't have any orders</h1>
                :
                <div className="orders">
                    {
                        orders.map(order=>(<OrderItem key={order.id} order={order}></OrderItem>))
                    }
                </div>
            }
        </div>
    )
}

export default OrderListing;