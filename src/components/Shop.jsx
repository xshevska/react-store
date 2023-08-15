import {useEffect, useContext} from "react";
import {API_KEY, API_URL} from "../config";
import {GoodList} from "./products/GoodList";

import {ShopContext} from "../context";

import {Preloader} from "./Preloader";
import {Cart} from "./cart/Cart";
import {BasketList} from "./cart/BasketList";
import {Alert} from "./cart/Alert";

function Shop() {
    const {loading, order, isBasketShow, alertName, setGoods} =
        useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className = "container content">
            <Cart quantity = {order.length}/>
            {loading ? <Preloader/> : <GoodList/>}
            {isBasketShow && <BasketList/>}
            {alertName && <Alert/>}
        </main>
    );
}

export {Shop};
