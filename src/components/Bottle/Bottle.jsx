import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt={name + 'img'} />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Add To Cart</button>
        </div>
    );
};

export default Bottle;