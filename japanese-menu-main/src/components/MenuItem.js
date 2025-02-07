import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className="d-flex align-items-center menu-item p-3">

            <img src={`/images/${imageName}`} alt={title} className="menu-image rounded-lg me-3" />

            <div className="flex-grow-1">

                <h4 className="mb-1">{title}</h4>
                <p className="mb-1 text-muted">{description}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-bold mb-0">${price.toFixed(2)}</p>
                    <button className="btn btn-light btn-md rounded-pill font-weight-bold">Add</button>
                </div>
                
            </div>

        </div>

    );
};

export default MenuItem;
