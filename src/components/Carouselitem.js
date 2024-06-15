import { useEffect, useState } from 'react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

// const carouselItems = [
//   {
//     id: 0,
//     imgSrc: './assets/img/banner_img_01.jpg',
//     title: 'Zay eCommerce',
//     subtitle: 'Tiny and Perfect eCommerce Template',
//     description: (
//       <>
//         Zay Shop is an eCommerce HTML5 CSS template with the latest version of Bootstrap 5. This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank" rel="noopener noreferrer">TemplateMo</a> website. Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank" rel="noopener noreferrer">Freepik Stories</a>, <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a> and <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons 8</a>.
//       </>
//     ),
//   },

//   {
//     id: 1,
//     imgSrc: './assets/img/banner_img_02.jpg',
//     title: 'Proident occaecat',
//     subtitle: 'Aliquip ex ea commodo consequat',
//     description: (
//       <>
//         You are permitted to use this Zay CSS template for your commercial websites. You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
//       </>
//     ),
//   },
//   {
//     id: 2,
//     imgSrc: './assets/img/banner_img_03.jpg',
//     title: 'Repr in voluptate',
//     subtitle: 'Ullamco laboris nisi ut',
//     description: (
//       <>
//         We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
//       </>
//     ),
//   },
// ];

export default function CustomCarousel() {

    const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(response => {
        setCarouselItems(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the carousel items!", error);
      });
  }, []);
  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={item.id} interval={3000} className="p-5">
          <div className="container bg-light">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img className="img-fluid" style={{width:'220px', marginLeft:'190px'}} src={item.image} alt={item.title} />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left align-self-center">
                  <h1 className="h1 text-success">
                    <b>{item.title.split(' ')[0]}</b> {item.title.split(' ').slice(1).join(' ')}
                  </h1>
                  <h3 className="h2">{item.subtitle}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
