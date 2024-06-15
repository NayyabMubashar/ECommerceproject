

// CarouselCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';

import { Card, Button } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { addToCart } from './slices/counterslice';

const CarouselCard = () => {
  const [carouselCard, setCarouselCard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setCarouselCard(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the carousel items!", error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carouselCard.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <div className="row text-center py-3 ">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Featured Product</h1>
          <p>
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
      <div className='text-right'>
        
        
      </div>
      <div className='row '>
        {currentItems.map((item) => (
          <div key={item.id} className='p-2 col-md-4 carousal-card'>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={item.image} style={{ width: '100px', height:'auto', marginLeft: '120px' }} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description.slice(2, 60)}...
                </Card.Text>
                Price:<p>{item.price}</p>
                Rating:<p>{item.rating.rate}</p>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>ADD to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Pagination>
        {Array.from({ length: Math.ceil(carouselCard.length / itemsPerPage) }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default CarouselCard;

