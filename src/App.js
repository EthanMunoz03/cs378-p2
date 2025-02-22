import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter';
import OrderPopUp from './components/OrderPopUp';
import EmptyCartPopUp from './components/EmptyCartPopUp';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const title = "Miso Bevo";
const tagline = "Where Bevo Meets Bento";
const logo = "menu-logo.png";


function App() {

  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const [isOrderPopUpOpen, setIsOrderPopUpOpen] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);
  const [isEmptyCartPopUpOpen, setIsEmptyCartPopUpOpen] = useState(false);

  // Add an item to cart
  const handleIncrease = (itemId, price) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[itemId] || 0) + 1;
      return { ...prevCart, [itemId]: newQuantity };
    });
    setSubtotal((prevSubtotal) => prevSubtotal + price);
  };

  // Remove an item from cart
  const handleDecrease = (itemId, price) => {
    setCart((prevCart) => {
      if (!prevCart[itemId]) return prevCart;

      const newQuantity = prevCart[itemId] - 1;
      const updatedCart = { ...prevCart };

      if (newQuantity === 0) {
        delete updatedCart[itemId];
      } else {
        updatedCart[itemId] = newQuantity;
      }

      return updatedCart;
    });
    setSubtotal((prevSubtotal) => prevSubtotal - price);
  };

  // Order all items in cart
  const handleOrder = () => {
    const itemsOrdered = Object.entries(cart)
      .filter(([id, quantity]) => quantity > 0)
      .map(([id, quantity]) => {
        const item = menuItems.find(item => item.id === Number(id));
        return {
          name: item.title,
          quantity,
          price: item.price,
          totalPrice: item.price * quantity
        };
      });

    // If cart is empty, display the pop up
    if (itemsOrdered.length === 0) {
      setIsEmptyCartPopUpOpen(true);
      return;
    }

    setOrderedItems(itemsOrdered);
    setIsOrderPopUpOpen(true);
  };

  // Clear items from cart
  const handleClear = () => {
    setCart({});
    setSubtotal(0);
  };

  // Place the order in pop up
  const confirmPopUp = () => {
    setIsOrderPopUpOpen(false);
    setCart({});
    setSubtotal(0);
  };

  // Cancel order in pop up
  const cancelPopUp = () => {
    setIsOrderPopUpOpen(false);
  };

  // Close the empty cart pop up
  const closeEmptyCartPopUp = () => {
    setIsEmptyCartPopUpOpen(false);
  };

  return (
    <>
      <div className="container">

        <MenuHeader
          title={title}
          tagline={tagline}
          logo={logo}
        />

        <div className="menu">

          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              description={item.description}
              imageName={item.imageName}
              price={item.price}
              quantity={cart[item.id] || 0}
              onIncrease={() => handleIncrease(item.id, item.price)}
              onDecrease={() => handleDecrease(item.id, item.price)}
            />
          ))}

          <br></br>
          <br></br>

        </div>
        <MenuFooter
          subtotal={subtotal}
          onOrder={handleOrder}
          onClear={handleClear} />
      </div>

      <OrderPopUp
        isOpen={isOrderPopUpOpen}
        orderedItems={orderedItems}
        onConfirm={confirmPopUp}
        subtotal={subtotal}
        onCancel={cancelPopUp}
      />

      <EmptyCartPopUp
        isOpen={isEmptyCartPopUpOpen}
        onClose={closeEmptyCartPopUp}
      />

    </>
  );
}

export default App;
