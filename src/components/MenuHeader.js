import React from 'react';

function MenuHeader() {
    return (
        <div>
            <div className="menu-header">
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Bevo Bento Logo" className="menu-logo" />
                <h1 className="menu-title">Miso Bevo</h1>
            </div>
            <p className="menu-tagline">Where Bevo Meets Bento</p>
        </div>
    );
}

export default MenuHeader;