import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuFooter({ subtotal, onOrder, onClear }) {
    return (
        <footer className="footer d-flex justify-content-between align-items-center">

            <div className="footer-left">
                <span className="subtotal">Subtotal: ${subtotal.toFixed(2)}</span>
            </div>

            <div className="footer-right">
                <button className="footer-btn rounded-pill" onClick={onOrder}>Order</button>
                <button className="footer-btn rounded-pill" onClick={onClear}>Clear</button>
            </div>
            
        </footer>
    );
}

export default MenuFooter;