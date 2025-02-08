import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuHeader({ title, tagline, logo }) {
    return (
        <div>
            <div className="menu-header">
                <img src={`${process.env.PUBLIC_URL}/images/${logo}`} alt="Bevo Bento Logo" className="menu-logo" />
                <h1 className="menu-title">{title}</h1>
            </div>
            <p className="menu-tagline">{tagline}</p>
        </div>
    );
}

export default MenuHeader;