import "./order-item.styles.scss";
import { Link } from "react-router-dom";
import InfoIcon from "../../assets/info_black_24dp.svg";

const OrderItem = (order)=>{
    const {id,total,created_at,orderItems} = order.order;
    const fourItems=orderItems.filter((item,index)=>index<4);
    return (
      <div className="order-item">
        <span className="order-item-block">{id}</span>
        <span className="order-item-block">${total}</span>
        <span className="order-item-block">{created_at}</span>
        <div className="order-item-block">
            {
                fourItems.map(item=><img className="order-item-image" key={item.id} src={item.small_picture} alt=""/>)
            }
        </div>
      </div>
    );}

export default OrderItem;

