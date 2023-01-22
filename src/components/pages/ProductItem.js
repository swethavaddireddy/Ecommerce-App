import React from 'react';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './ProductItem.module.css';

function ProductItem(props) {
    let { id, title, price, description } = props;
    const dispatch = useDispatch();

    const addToCartHandler = ()=>{
    dispatch(cartActions.addItemToCart({
        id,
        title,
        price
     }))
   }
    
    return (
        <li className={classes.item}>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
        </li>
    );
}

export default ProductItem;
