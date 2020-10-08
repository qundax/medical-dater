import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
const moment = require('moment');

function Device(props) {
  const [time, setTime] = useState(moment().format('YYYY-MM-DDTHH:mm'));
  const {device_id} = useParams();
  const device = props.data.find(item => item.id === parseInt(device_id));

  if (device) {
    return (
      <div>
        <div style={{height: '300px', margin: '0 auto', backgroundImage: `url(${device.image_src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
        <h1>{device.name}</h1>
        <h2>{device.duration}</h2>
        <br />
        <form>
          <TextField id='start_datetime' label='Start On' type='datetime-local' defaultValue={time} onChange={(event) => {setTime(event.target.value)}} />
          <br /><br /><br />
          <Link to={{ pathname: `/sticker/${device.id}`, state: { device: device, time: time } }}><Button variant='contained'>Submit</Button></Link>
        </form>
        <br />
        <Link to='/'>Back</Link>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Device;