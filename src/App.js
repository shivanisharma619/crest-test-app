import React from 'react';
import Products from './Products';
function App() {
  return (
    <div className="App m-5">
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Product Catalog</h1>
        </div>
      </div>
      <br /><br />
      <Products />
    </div>
  );
}

export default App;
