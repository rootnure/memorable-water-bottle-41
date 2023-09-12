import { useState } from 'react';
import './Bottles.css';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToLS, getStoredCart } from '../../Utilities/localstorage';

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
            console.log(storedCart, bottles);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
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

    const cartCounterStyles = {
        position: 'fixed',
        bottom: '-15px',
        right: '5px',
        backgroundColor: 'yellow',
        color: 'black',
        padding: '10px',
        borderRadius: '50%',
        height: '26px',
        width: '26px',
    };

    return (
        <div style={{position: 'relative'}}>
            <h3>Bottles Available: {bottles.length}</h3>
            <h4 style={cartCounterStyles}>{cart.length}</h4>
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