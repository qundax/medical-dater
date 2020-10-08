import React from 'react';
import { Button, Icon } from "@material-ui/core";
const moment = require('moment');

function Sticker(props) {
  const {device, time} = props.location.state
  const [duration, type] = device.duration.split(" ")

  const svgIcon = (
    <Icon>
      <img alt="print" src="/printer.svg" />
    </Icon>
  );

  return (
    <div>
      <h2>{device.name}</h2>
      <h3>Start Date</h3>
      <p>{moment(time).format('h:mm A - dddd, DD MMMM YYYY')}</p>
      <h3>End Date</h3>
      <p>{moment(time).add(parseInt(duration), type).format('h:mm A - dddd, DD MMMM YYYY')}</p>
      <br /><br />
      <Button variant='outlined' startIcon={svgIcon}>Print</Button>
      <br /><br />
      <Button onClick={() => props.history.goBack()}>Back</Button>
    </div>
  )
}

export default Sticker;