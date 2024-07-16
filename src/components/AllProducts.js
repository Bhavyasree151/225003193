// AllProducts.js
import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProductCard from './ProductCard';
import getProducts from '../api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
      setProducts(response);
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (