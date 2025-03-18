import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LayerTwo from './pages/LayerTwo';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/layer2' component={LayerTwo}></Route>
    </Routes>
  );
}

export default Main;