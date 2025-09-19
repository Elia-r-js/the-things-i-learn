import React from 'react';

import { BrowserRouter, Routes } from 'react-router-dom';
import BuildRouter from './utils/BuildRoutes';
import { routes } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {BuildRouter(routes)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
