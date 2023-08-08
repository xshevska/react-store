import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {order = []} = props;
    return (
        <ul className = "collection">
            <li className = "collection-item active">Basket</li>
            {order.length ? (
                order.map((item) => <BasketItem key = {item.id} {...item} />)
            ) : (
                <li className = "collection-item ">Basket is empty</li>
            )}

            <li className = "collection-item active">Total Cost :</li>
        </ul>
    );
}

export {BasketList};
