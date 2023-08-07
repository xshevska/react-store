function GoodsItem(props) {
    const {id, name, description, price, full_background} = props;

    return (
        <div className = "card" id = {id}>
            <div className = "card-image">
                <img src = {full_background} alt = {name}/>

            </div>
            <div className = "card-content">
                <span className = "card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className = "card-action">
                <a className = "waves-effect waves-light btn-small"><i className = "material-icons right">add_shopping_cart</i>Buy</a>
                <span className = "right" style = {{fontSize: '1.8rem'}}>{price} €</span>
            </div>
        </div>
    );
}

// "image": "https://media.fortniteapi.io/images/db617ac5b6b73e7833d0a4a8d6b00103/featured.png",
// "icon": "https://media.fortniteapi.io/images/db617ac5b6b73e7833d0a4a8d6b00103/transparent.png",
// "full_background": "https://media.fortniteapi.io/images/db617ac5b6b73e7833d0a4a8d6b00103/background_full.en.png",

export {GoodsItem};
