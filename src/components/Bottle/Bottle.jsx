import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bottle'>
            <h3 title={name}>{name.length > 20 ? name.slice(0, 18) + '...' : name}</h3>
            <img src={img} alt={name + 'img'} />
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Add To Cart</button>
        </div>
    );
};

export default Bottle;