import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';

import Device from './pages/Device';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Sticker from './pages/Sticker';

const currentLocation = window.location.href

function App() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [helper, setHelper] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(currentLocation + 'api/devices/');
        const data = await response.json();
        setData(data.sort((a, b) => {
          return a.name > b.name ? 1 : (b.name > a.name ? -1 : 0);
        }));
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();

    async function fetchCategories() {
      try {
        const response = await fetch(currentLocation + 'api/categories/');
        const data = await response.json();
        setCategories(data);
      } catch(error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [helper]);

  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Landing data={data} categories={categories} />} />
        <Route exact path='/devices/:device_id' render={() => <Device data={data} />} />
        <Route exact path='/sticker/:device_id' component={Sticker} />
      </Switch>
    </div>
  )
}

export default App;