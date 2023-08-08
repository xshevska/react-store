function BasketItem(props) {
    const {id, name, price, quantity} = props;
    return (
        <li className = "collection-item ">
            {name} x{quantity} = {price}
            <span className = "secondary-content">
                <i className = "material-icons basket-delete">clear</i>
            </span>
        </li>
    );
}

export {BasketItem};
