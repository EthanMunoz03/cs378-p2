import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmptyCartPopUp({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>No items in cart</h2>
                <button className="btn btn-light rounded-pill" onClick={onClose}>Okay</button>
            </div>
        </div>
    );
}

export default EmptyCartPopUp;