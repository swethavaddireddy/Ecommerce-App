import React from 'react';
import classes from './MainNavigation.module.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
function MainNavigation() {

    const cartItems = useSelector(state => state.cart.items);

    return (
       <nav className={classes.header}>
        <h1>Ecommerce App</h1>
        <NavLink to='/' className={({isActive})=> isActive ? classes.active: undefined}>
            <span className={classes.header__home}>Home</span>
         </NavLink>
         <NavLink to='/checkout' className={({isActive})=> isActive ? classes.active: undefined}>
         <div className={classes.header__cart}>
                <span>My Cart</span>
                <span className={classes.badge}>{cartItems.length}</span>
        </div>
         </NavLink>
         <NavLink to='/login'className={({isActive})=> isActive ? classes.active: undefined}>
            <span className={classes.header__out}>Logout</span>
         </NavLink>
       </nav>
    );
}

export default MainNavigation;
