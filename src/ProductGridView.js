import React, { useState } from 'react';
import { Card, CardGroup, Button, CardColumns, CardDeck } from 'react-bootstrap';
import { products } from './mockProducts';

export default function ProductGridView({
	handleProductCart,
}) {

	return (
		<CardColumns className="m-5">
		  {products.map(product => {
		  	return (
				  <Card className="m-1" key={product.id}>
				    <Card.Img variant="top" src={product.productImage} />
					  <Card.Body>
					    <Card.Title>{product.productName}</Card.Title>
					    <Card.Text>
					      {product.productDesciption}
					    </Card.Text>
				      <footer className="blockquote-footer">
				        {product.count < 5 ? 'Few items left in stock' : ''}
				      </footer>
					  </Card.Body>
					    <Button variant="primary" onClick={(product) => handleProductCart(product)}>Add to cart</Button>
				  </Card>
		  	)
		  })}
		</CardColumns>
	)
}