import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {GoodList} from "./GoodList";

import {Preloader} from "./Preloader";
import {Cart} from "./Cart";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className = "container content">
            <Cart quantity = {order.length} />
            {loading ? <Preloader/> : <GoodList goods = {goods}/>}
        </main>
    );
}

export {Shop};
