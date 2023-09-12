import PropTypes from 'prop-types';

import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {

    return (
        <div className='cart-container'>
            <h4 className='cart-counter'>{cart.length}</h4>
            <h3>My Cart</h3>
            <div className='cart-items'>
                {
                    cart.length ? cart.map(item => <div className='flex flex-col items-center' key={item.id}>
                            <img src={item.img} />
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </div>) : 'No item added'
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;