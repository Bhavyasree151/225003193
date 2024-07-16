import React, { useState } from 'eact';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';

const FilterBar = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFilterChange = () => {
    onFilterChange({
      category,
      company,
      rating,
      priceRange,
      availability,
    });
  };

  return (
    <div>
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Select
        label="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="AMZ">Amazon</MenuItem>
        <MenuItem value="FLP">Flipkart</MenuItem>
        <MenuItem value="SNP">Snapdeal</MenuItem>
        <MenuItem value="MYN">Myntra</MenuItem>
        <MenuItem value="AZO">Ajio</MenuItem>
      </Select>
      <TextField
        label="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <TextField
        label="Price Range"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      />
      <Select
        label="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="yes">In Stock</MenuItem>
        <MenuItem value="out-of-stock">Out of Stock</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={handleFilterChange}>
        Apply Filter
      </Button>
    </div>
  );
};

export default FilterBar;