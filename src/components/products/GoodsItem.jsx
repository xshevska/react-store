function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className = "card">
            <div className = "card-image">
                <img src = {full_background} alt = {name}/>
            </div>
            <div className = "card-content">
                <span className = "card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className = "card-action">
                <button
                    className = "waves-effect waves-light btn-small"
                    onClick = {() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    <i className = "material-icons right">add_shopping_cart</i>Buy
                </button>
                <span className = "right" style = {{fontSize: "1.8rem"}}>
          {price} €
        </span>
            </div>
        </div>
    );
}


export {GoodsItem};
