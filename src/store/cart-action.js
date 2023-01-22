import { cartActions } from "./cart-slice";

export const getCartData = () => {
    return async (dispatch) => {
        const getData = async () => {
            const response = await fetch('https://redux-87d58-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('sending failed!');
            }
            const data = response.json();
            return data;

        };
        try {
            const cartData = await getData();
            dispatch(cartActions.replaceCartData({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const sendCartData = (cart) => {
    return async () => {
        const sendRequest = async () => {
            const response = await fetch('https://redux-87d58-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            if (!response.ok) {
                throw new Error('sending request failed!');
            }
        }
        try {
            await sendRequest();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
