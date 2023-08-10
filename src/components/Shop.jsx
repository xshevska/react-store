import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {GoodList} from "./products/GoodList";

import {Preloader} from "./Preloader";
import {Cart} from "./cart/Cart";
import {BasketList} from "./cart/BasketList";
import {Alert} from './cart/Alert'

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

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

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }

        setAlertName(item.name);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const incrementQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
                
            }
        });
        setOrder(newOrder);
    };

    const decrementQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName('');
    }

    return (
        <main className = "container content">
            <Cart quantity = {order.length} handleBasketShow = {handleBasketShow}/>
            {loading ? (
                <Preloader/>
            ) : (
                <GoodList goods = {goods} addToBasket = {addToBasket}/>
            )}
            {isBasketShow && (
                <BasketList
                    order = {order}
                    handleBasketShow = {handleBasketShow}
                    removeFromBasket = {removeFromBasket}
                    incrementQuantity = {incrementQuantity}
                    decrementQuantity = {decrementQuantity}
                />
            )}
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
}

export {Shop};
