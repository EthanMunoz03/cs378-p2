import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderPopUp({ isOpen, orderedItems, onConfirm, subtotal, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2 className="order-summary">Order Summary</h2>
                <ul className="items-list">

                    {orderedItems.map(item => (
                        <li key={item.name}>

                            <div className="item-main-details">
                                <div className="d-flex justify-content-start"> 
                                    <span className="quantity">x{item.quantity}  </span>
                                    <span className="item-name">{item.name}</span>
                                </div>
                                <span className="item-price"> ${item.totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="price-per-item text-muted">
                                <span className="total-price">each ${item.price.toFixed(2)}</span>
                            </div>

                        </li>
                    ))}

                </ul>

                <div className="final-total">
                    <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                </div>
                
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light rounded-pill cancel-btn" onClick={onCancel}>Cancel</button> 
                    <button className="btn btn-light rounded-pill confirm-btn" onClick={onConfirm}>Confirm</button>
                </div>

            </div>
        </div>
    );
}

export default OrderPopUp;