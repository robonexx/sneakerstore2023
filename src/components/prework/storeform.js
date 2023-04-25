import React, { useState } from 'react';

const Store = () => {
  const [store, setStore] = useState([
    {
      product: 'Nike Air Max 270',
      name: 'Air Max 270',
      id: 1,
      price: 120,
      quantity: 50,
      image: 'https://example.com/airmax270.jpg',
      size: '8, 8.5, 9, 9.5, 10',
      description:
        'The Nike Air Max 270 features a large air unit in the heel for maximum comfort.',
      release_date: 'January 1, 2020',
    },
    {
      product: 'Adidas Ultra Boost',
      name: 'Ultra Boost',
      id: 2,
      price: 140,
      quantity: 40,
      image: 'https://example.com/ultraboost.jpg',
      size: '8, 8.5, 9, 9.5, 10',
      description:
        'The Adidas Ultra Boost features a responsive Boost midsole for energy return with every step.',
      release_date: 'February 1, 2020',
    },
  ]);

  const [message, setMessage] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const product = e.target.elements.product.value;
    const name = e.target.elements.name.value;
    const id = e.target.elements.id.value;
    const price = e.target.elements.price.value;
    const quantity = e.target.elements.quantity.value;
    const image = e.target.elements.image.value;
    const size = e.target.elements.size.value;
    const description = e.target.elements.description.value;
    const release_date = e.target.elements.release_date.value;
    if (
      product &&
      name &&
      id &&
      price &&
      quantity &&
      image &&
      size &&
      description &&
      release_date
    ) {
      setStore([
        ...store,
        {
          product,
          name,
          id,
          price,
          quantity,
          image,
          size,
          description,
          release_date,
        },
      ]);
      setMessage('Product added successfully!');
    } else {
      setMessage('Please fill in all fields!');
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const product = e.target.elements.product.value;
    const name = e.target.elements.name.value;
    const id = e.target.elements.id.value;
    const price = e.target.elements.price.value;
    const quantity = e.target.elements.quantity.value;
    const image = e.target.elements.image.value;
    const size = e.target.elements.size.value;
    const description = e.target.elements.description.value;
    const release_date = e.target.elements.release_date.value;
    if (
      product &&
      name &&
      id &&
      price &&
      quantity &&
      image &&
      size &&
      description &&
      release_date
    ) {
      setStore([
        ...store,
        {
          product,
          name,
          id,
          price,
          quantity,
          image,
          size,
          description,
          release_date,
        },
      ]);
      setMessage('Product updated successfully!');
    } else {
      setMessage('Please fill in all fields!');
    }
  };
};
/* 
import React, { useState } from 'react';

const initialFormState = { id: null, product: '', name: '', price: '', quantity: '', image: '', size: '', description: '', releaseDate: '' }

function App() {
  const [products, setProducts] = useState([
    { id: 1, product: 'Nike Air Max', name: 'AM1', price: 120, quantity: 50, image: 'https://via.placeholder.com/150', size: '9, 9.5, 10, 11', description: 'The iconic Air Max sneaker with classic style.', releaseDate: '2022-06-15' },
    { id: 2, product: 'Adidas Yeezy Boost', name: 'YZY', price: 250, quantity: 25, image: 'https://via.placeholder.com/150', size: '8, 8.5, 9, 9.5', description: 'The sleek and stylish Yeezy Boost sneaker.', releaseDate: '2022-08-01' },
    { id: 3, product: 'Puma Cali', name: 'Cali', price: 80, quantity: 100, image: 'https://via.placeholder.com/150', size: '7, 7.5, 8, 8.5', description: 'The trendy Cali sneaker from Puma.', releaseDate: '2022-10-15' },
  ]);

  const [currentProduct, setCurrentProduct] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target
    setCurrentProduct({ ...currentProduct, [name]: value })
  }

  const addProduct = product => {
    product.id = products.length + 1
    setProducts([...products, product])
  }

  const deleteProduct = id => {
    setEditing(false)
    setProducts(products.filter(product => product.id !== id))
  }

  const updateProduct = (id, updatedProduct) => {
    setEditing(false)
    setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
  }

  const editRow = product => {
    setEditing(true)
    setCurrentProduct({ id: product.id, product: product.product, name: product.name, price: product.price, quantity: product.quantity, image: product.image, size: product.size, description: product.description, releaseDate: product.releaseDate })
  }
 */
