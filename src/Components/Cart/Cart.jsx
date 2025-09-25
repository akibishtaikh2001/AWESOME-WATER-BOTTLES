import React from 'react';
import Bottle from '../Bottle/Bottle';
import './Cart.css'


const Cart = ({ cart, handelRemoveFromCart }) => {
    return (
        <div className='cart_container'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={() => handelRemoveFromCart(bottle.id)}>X</button>
                </div>)

            }
        </div>
    );
};

export default Cart;