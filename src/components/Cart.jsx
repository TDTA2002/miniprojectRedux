import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, deleteFromCart, updateTotal } from '../redux/product/action';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const total = useSelector((state) => state.total);
    const dispatch = useDispatch();

    const [notification, setNotification] = useState('');


    const handleQuantityChange = (productId, quantity) => {
        dispatch(updateCart(productId, quantity));
    };

    const handleDelete = (productId) => {
        dispatch(deleteFromCart(productId));
        dispatch(updateTotal(cart));
        setNotification('Delete');
    };

    const handleUpdate = (productId) => {
        dispatch(updateTotal(cart));
        setNotification('Update');

    };

    return (
        <div className="col-lg-6 bg-grey">
            <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <input
                                        style={{ width: '50px' }}
                                        type="number"
                                        value={product.quantity}
                                        min="1"
                                        onChange={(e) =>
                                            handleQuantityChange(product.id, e.target.value)
                                        }
                                    />
                                </td>
                                <td>{product.total}</td>
                                <td>
                                    <button onClick={() => handleUpdate(product.id)}>Update</button>
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {cart.length === 0 ? (
                    <p>Empty product in your cart</p>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                        <p>There are {cart.length} items in your shopping cart</p>
                        <h5 style={{ color: 'red' }}>Total: {total}</h5>
                    </div>
                )}
                <div style={{ color: 'green', background: '#b0f4be', marginTop: '30px' }}>
                    {notification === 'Update' ? (
                        <p className="success-message">Update success</p>
                    ) : notification === 'Delete' ? (
                        <p className="success-message">Delete success</p>
                    ) : null}
                </div>
            </div>
        </div >
    );
}
