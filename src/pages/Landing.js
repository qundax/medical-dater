import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MedicalDevice from '../components/MedicalDevice';

function Landing(props) {
  const [active, setActive] = useState('All');

  const getCategoryName = categoryId => {
    for (let i = 0; i < props.categories.length; i++) {
      if (categoryId === props.categories[i].id) {
        return props.categories[i].name
      }
    }
  };

  const devices = props.data.map((device, index) => {
    if (active === 'All' || active === getCategoryName(device.category)) {
      return (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Link to={`/devices/${device.id}`}>
            <MedicalDevice device={device} />
          </Link>
        </Grid>
      )
    } else {
      return (
        <div key={index}></div>
      )
    }
  });

  const useStyles = () => {
    return makeStyles((theme) => ({
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      }
    }));
  };

  const classes = useStyles();

  const categories = props.categories.sort((a, b) => {
    return a.name > b.name ? 1 : (b.name > a.name ? -1 : 0);
  }).map((category, index) => {
    return (
    <MenuItem key={index} value={category.name}>{category.name}</MenuItem>
    )
  });

  return (
    <div className='container'>
      <InputLabel id="label">Category</InputLabel>
      <Select labelId="label" id="dropdown" value={active} className='dropdown' onChange={(event) => {setActive(event.target.value)}}>
        {categories}
      </Select>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {devices}
        </Grid>
      </Container>
    </div>
  )
}

export default Landing;