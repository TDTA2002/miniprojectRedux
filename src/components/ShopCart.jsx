import React from 'react'
import Shopping from './Shopping'
import Cart from './Cart'

export default function ShopCart() {
    return (
            <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <Shopping />
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
