import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/dummy-data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
  }, []);
  
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export default App;
