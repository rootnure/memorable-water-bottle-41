import { useState } from 'react';
import './Bottles.css';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLS, getStoredCart, removeFromLS } from '../../Utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    }, []);

    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if(bottles.length){
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles);
            const savedCart = [];
            for(const id of storedCart){
                // console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle) {
                    savedCart.push(bottle);
                }
            }
            console.log('saved cart:', savedCart);
            setCart(savedCart);
        }
    }, [bottles]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        // remove from visual state
        const cartRemaining = cart.filter(item => item.id !== id);
        setCart(cartRemaining);
        // remove from local storage
        removeFromLS(id);
    }

    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart} />
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart={handleAddToCart} />)
                }
            </div>
        </div>
    );
};

export default Bottles;