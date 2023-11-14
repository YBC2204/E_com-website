/* eslint-disable react/prop-types */
import arrow from '../assets/breadcrum_arrow.png'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export const BreadCrumbs = (props) => {
    const {product} = props; 
    console.log(product.category);
  return (
    
    <div className='capitalize lg:mx-44 my-4 mx-3'>
    <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    HOME
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href='/$`{product.category}`'
  >
    {product.category}
  </Link>
  <Typography color="text.primary">{product.name}</Typography>
</Breadcrumbs>
</div>
  )
}
