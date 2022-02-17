export const addPurchaseItemToCart = (cartItems,cartItemToAdd)=>{
    return [...cartItems,cartItemToAdd]
};

export const addRentItemToCart = (cartItems,cartItemToAdd)=>{
    return [...cartItems,cartItemToAdd]
};

export const removeItemFromCart = (cartItems,cartItemToRemove)=>{
    return cartItems.length>0?cartItems.filter(item=>item.id!==cartItemToRemove.id):[]
};

