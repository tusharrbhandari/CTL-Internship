import React from 'react';
import CarCard from './CarCard';

export default {
  title: 'Components/CarCard',
  component: CarCard,
};

const Template = (args) => <CarCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://th.bing.com/th/id/OIP.IjllfHBnWCEy88ne06680wHaEB?rs=1&pid=ImgDetMain',
  title: '2023 Maruti Alto K10 VXI',
  distance: '10,000',
  fuelType: 'Petrol',
  transmission: 'Manual',
  price: '₹5.15 Lakh',
  oldPrice: null,
  discount: null,
  location: 'Marathahalli Colony, Bangalore',
};

export const WithDiscount = Template.bind({});
WithDiscount.args = {
  imageUrl: 'https://th.bing.com/th/id/OIP.saR9HqhXShhjVqYngAlmcwHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7/300x200',
  title: '2023 Maruti Alto K10 LXI',
  distance: '5,198',
  fuelType: 'Petrol',
  transmission: 'Manual',
  price: '₹4.33 Lakh',
  oldPrice: '₹4.85 Lakh',
  discount: '₹52,000',
  location: 'Mahadevapura, Bangalore',
};
