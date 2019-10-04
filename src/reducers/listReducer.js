// import uuid from 'uuid/v4';
import image1 from '../pictures/image1.jpeg';
import image2 from '../pictures/image2.jpeg';
import image3 from '../pictures/image3.jpeg';
import image4 from '../pictures/image4.jpeg';
import image5 from '../pictures/image5.jpeg';
import image6 from '../pictures/image6.jpeg';
import image7 from '../pictures/image7.jpeg';
import image8 from '../pictures/image8.jpeg';
import image9 from '../pictures/image9.jpeg';
import image10 from '../pictures/image10.jpeg';
import image11 from '../pictures/image11.jpeg';
import image12 from '../pictures/image12.jpeg';
import image13 from '../pictures/image13.jpeg';

const initialState = [
  {
    id: 1,
    price: 158.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Madewell Quilted Indigo Shirt Jacket',
    image: image1,
    inCart: false,
    quantity: 1
  },
  {
    id: 2,
    price: 119.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Patagonia Lightweight Better Sweater Pullover',
    image: image2,
    inCart: false,
    quantity: 1
  },
  {
    id: 3,
    price: 128.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Madewell Classic Denim Jacket',
    image: image3,
    inCart: false,
    quantity: 1
  },
  {
    id: 4,
    price: 98.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Liverpool Regent Straight Leg Twill Pants',
    image: image4,
    inCart: false,
    quantity: 1
  },
  {
    id: 5,
    price: 698.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Ted Baker London Jay Trim Fit Check Wool Sport Coat',
    image: image5,
    inCart: false,
    quantity: 1
  },
  {
    id: 6,
    price: 325.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Magnanni Caitin Sneaker (Men)',
    image: image6,
    inCart: false,
    quantity: 1
  },
  {
    id: 7,
    price: 110.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: "Nike 'Air Jordan 1 Mid' Sneaker (Men)",
    image: image7,
    inCart: false,
    quantity: 1
  },
  {
    id: 8,
    price: 195.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Reiss Pete Stripe Sweater',
    image: image8,
    inCart: false,
    quantity: 1
  },
  {
    id: 9,
    price: 70.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description:
      "Fjällräven 'Mini Kånken' Water Resistant Backpack (Nordstrom Exclusive Color)",
    image: image9,
    inCart: false,
    quantity: 1
  },
  {
    id: 10,
    price: 815.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Off-White Odsy-1000 Sneaker (Men)',
    image: image10,
    inCart: false,
    quantity: 1
  },
  {
    id: 11,
    price: 50.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Rains Rush Waterproof Tote',
    image: image11,
    inCart: false,
    quantity: 1
  },
  {
    id: 12,
    price: 178.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Ray-Ban Standard Original 58mm Aviator Sunglasses',
    image: image12,
    inCart: false,
    quantity: 1
  },
  {
    id: 13,
    price: 175.0,
    sizes: ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'],
    description: 'Faux Fur Long Teddy Coat',
    image: image13,
    inCart: false,
    quantity: 1
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
