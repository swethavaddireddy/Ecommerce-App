import React, { useRef } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { useNavigate } from 'react-router';

function Auth() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if (username.trim() !== '' && password.trim() !== '') {
            dispatch(authActions.login({
                username,
                password
            }))
            navigate('/');
        }
    }

    return (
        <div className={classes.login}>
            <form onSubmit={loginHandler}>
                <div>
                    <label>username: </label>
                    <input type='text' ref={usernameRef} />
                </div>
                <div>
                    <label>password: </label>
                    <input type='text' ref={passwordRef} />
                </div>
                <button type='submit' className={classes.login__button}>Login</button>

            </form>

        </div>
    );
}

export default Auth;
