const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id); // push() will work here as it is inside plain JS file not inside React JSX
    // save to local storage
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    // removing every matched id
    const remaining = cart.filter(itemId => itemId !== id);
    saveCartToLS(remaining);
}

export { addToLS, getStoredCart, removeFromLS }