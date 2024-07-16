import React from 'eact';
import { Container, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Container maxWidth="md" style={{ padding: 20 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; 2023 Product Catalog. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;