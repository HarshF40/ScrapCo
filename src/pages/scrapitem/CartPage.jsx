import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    // Calculate total cost based on quantity
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0).toFixed(2);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl rounded-lg">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Scrap Cart</h2>
                    <button
                        type="button"
                        onClick={handleClearCart}
                        className="py-2 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="mt-8">
                    <div className="flow-root">
                        {cartItems.length > 0 ? (
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {cartItems.map((scrap) => (
                                    <li key={scrap._id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={getImgUrl(scrap.image)}
                                                alt={scrap.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <Link to={`/scrap/${scrap._id}`} className="hover:text-green-600">
                                                            {scrap.name}
                                                        </Link>
                                                    </h3>
                                                    <p className="sm:ml-4">₹{scrap.price} per kg</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500 capitalize">
                                                    <strong>Category: </strong>{scrap.category}
                                                </p>
                                            </div>
                                            <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                                                <p className="text-gray-500"><strong>Qty:</strong> {scrap.quantity || 1} kg</p>

                                                <button
                                                    onClick={() => handleRemoveFromCart(scrap)}
                                                    type="button"
                                                    className="text-red-500 hover:text-red-700 font-medium"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-600">Your cart is empty!</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{totalPrice ? totalPrice : 0}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <Link
                        to="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600 transition-all"
                    >
                        Proceed to Checkout
                    </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <Link to="/">
                        or
                        <button
                            type="button"
                            className="font-medium text-green-600 hover:text-green-500 ml-1"
                        >
                            Continue Shopping <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
