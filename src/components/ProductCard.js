// ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.productName}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1" component="p">
              Price: {product.price}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" component="p">
              Rating: {product.rating}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" component="p">
              Discount: {product.discount}%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" component="p">
              Availability: {product.availability}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;