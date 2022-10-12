import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import HouseDetails from './pages/HouseDetails';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props)=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="house">
          <Route index element={<HouseDetails/>} />
          <Route path=":id" element={<HouseDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
