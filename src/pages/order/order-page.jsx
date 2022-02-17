import { Routes,Route } from "react-router-dom";
import OrderListing from "../order-listing/order-listing-page";
import OrderDetail from "../order-detail/order-detail.page";

import "./order-page.styles.scss";

const OrderPage = () => {

    return (
        <div className='movies-page'>
            <Routes>
                <Route path='/listing' element={<OrderListing/>} />
                <Route path='/:orderId' element={<OrderDetail/>} />
            </Routes>
        </div>
    );
}

export default OrderPage; 