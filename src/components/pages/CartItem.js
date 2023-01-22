import React from 'react';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

function CartItem(props) {
    let { id, title, price, quantity, totalPrice } = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            quantity,
            totalPrice
        }))
    }
    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
    }
    
    return (
        <div className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${totalPrice.toFixed(2)}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    <span>x {quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>+</button>
                    <button onClick={removeFromCartHandler}>-</button>
                </div>
            </div>
        </div>

    );
}

export default CartItem;
