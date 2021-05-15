import React from 'react';
import { Table } from 'react-bootstrap';
import { products } from './mockProducts';

export default function ProductGridView() {

	return (
		<Table striped bordered hover variant="dark">
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>Product Name</th>
		      <th>Description</th>
		      <th>Price</th>
		      <th>InStock</th>
		    </tr>
		  </thead>
		  <tbody>
		    {products.map(product => {
		    	return (
				    <tr>
				      <td>{product.productID}</td>
				      <td>{product.productDesciption}</td>
				      <td>{product.productName}</td>
				      <td>{product.productPrice}</td>
				      <td>{product.inStock ? 'In Stock' : 'Out of Stock'}</td>
				    </tr>
		    	)
		    })}
		  </tbody>
		</Table>
	)
}