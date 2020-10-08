import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function MedicalDevice(props) {
  const device = props.device;

  const useStyles = () => {
    return makeStyles(() => ({
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      }
    }));
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.cardMedia} component='img' alt={device.name} height='150px' image={device.image_src} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom component='h2'>{device.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MedicalDevice;