import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/product/action';
import img1 from '../images/pizza.jpg'
import img2 from '../images/Hamburger.jpg'
import img3 from '../images/bread.jpg'
import img4 from '../images/Cake.jpg'

export default function Shopping() {
    const products = [
        { id: 1, name: 'Pizza', price: 12, image: img1 },
        { id: 2, name: 'Hamburger', price: 16, image: img2 },
        { id: 3, name: 'Bread', price: 13, image: img3 },
        { id: 4, name: 'Cake', price: 14, image: img4 }
    ];


    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <div className="col-lg-6">
            <div className="p-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 className="mb-0 text-muted">4 items</h6>
                </div>
                <hr className="my-4" />
                {products.map((product) => (
                    <div className="row mb-4 d-flex justify-content-between align-items-center" key={product.id}>
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={product.image} alt={product.name} style={{width:'100px'}}/>
                            
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{product.name}</h6>
                            <h6 className="text-black mb-0">Lorem ipsum dolor sit amet.</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">

                            <input
                                id="form1"
                                min={1}
                                max={1}
                                name="quantity"
                                defaultValue={1}
                                type="number"
                                className="form-control form-control-sm"
                            />

                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <button onClick={() => handleAddToCart(product)}> <h6 className="mb-0">{product.price} USD</h6>   </button>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                                <i className="fas fa-times" />
                            </a>
                        </div>
                    </div>
                ))}
                <hr className="my-4" />

            </div>
        </div>
    )
}
