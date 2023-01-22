import React, { useState, useEffect } from 'react';
import classes from './Checkout.module.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useNavigate } from 'react-router';

function Checkout() {

  const [total, setTotal] = useState();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    const total = cartItems?.reduce((acc, item) => (acc + item.totalPrice), 0)
    setTotal(total);
  }, [cartItems])

  const checkoutHandler = ()=>{
   navigate('/login');
  }
  return (
    <div className={classes.checkout}>
      {cartItems?.length === 0 ? (
        <div>
          <h2 className={classes.checkout__title}>Your ShoppingCart is Empty!</h2>
        </div>
      ) : (
        <div>
          <h2 className={classes.checkout__title}>Your ShoppingCart</h2>
          <ul>
            {cartItems.map(item => (
              <CartItem key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice} />

            ))}
          </ul>
        </div>)}

      {cartItems?.length > 0 &&
        <div className={classes.checkout__total}>
          <p>Total Amount ({cartItems.length} items): <strong>$ {total}</strong> </p>
        <button className={classes.checkout__button} onClick={checkoutHandler}>Proceed to checkout</button>
</div>}
    </div>
  );
}

export default Checkout;
