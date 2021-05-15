import React, { useState } from 'react';
import ProductGridView from './ProductGridView';
import ProductListView from './ProductListView';
import { Nav } from 'react-bootstrap';

export default function Products() {
  const [view, setView] = useState('grid');
  const [cartCount, setCartCount] = useState(localStorage.getItem('cartCount') || 0);

  const handleView = () => {
    const newView = view === 'grid' ? 'list' : 'grid';

    setView(newView);
  }

  const handleProductCart = (product) => {

    let cartCount = localStorage.getItem('cartCount') || 0;
    if (product.count === cartCount) {
      alert('Product is out of stock');
    }

    if (cartCount !== null) {
    	cartCount = Number(cartCount) + 1;
    }
    
    localStorage.setItem('cartCount', cartCount);
    setCartCount(cartCount);
    alert(`${cartCount} products added to cart`); 
  }

  const viewName = view === 'grid' ? 'List' : 'Grid';

	return (
		<React.Fragment>
		  <Nav variant="pills" className="justify-content-end" activeKey="/home">
		    <Nav.Item>
		      <Nav.Link href="javascript:void(0)" onClick={handleView}>{`Switch to ${viewName} View`}</Nav.Link>
		    </Nav.Item>
		    <Nav.Item>
		      <Nav.Link href="javascript:void(0)">{`Cart Items (${cartCount})`}</Nav.Link>
		    </Nav.Item>
		  </Nav>
		  <br />
		  {view === 'grid' ?
        <ProductGridView handleProductCart={handleProductCart} /> :
        <ProductListView />
		  }
    </React.Fragment>
	)
}