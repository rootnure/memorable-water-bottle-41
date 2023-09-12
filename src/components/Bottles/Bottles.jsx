import { useState } from 'react';
import './Bottles.css';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    }, []);

    return (
        <div>
            <h3>Bottles here: {bottles.length}</h3>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle} />)
                }
            </div>
        </div>
    );
};

export default Bottles;