import {useContext} from "react";
import {ShopContext} from "../../context";

function BasketItem(props) {
    const {id, name, price, quantity} = props;

    const {removeFromBasket, decrementQuantity, incrementQuantity} =
        useContext(ShopContext);

    return (
        <li className = "collection-item ">
            {name}{" "}
            <i
                className = "material-icons basket-quantity"
                onClick = {() => incrementQuantity(id)}
            >
                add_circle
            </i>{" "}
            x{quantity}{" "}
            <i
                className = "material-icons basket-quantity"
                onClick = {() => decrementQuantity(id)}
            >
                remove_circle
            </i>{" "}
            = {price * quantity} €
            <span
                className = "secondary-content"
                onClick = {() => removeFromBasket(id)}
            >
          <i className = "material-icons basket-delete">clear</i>
        </span>
        </li>
    );
}

export {BasketItem};
