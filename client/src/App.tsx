import React from 'react';
import { Routes, Route } from 'react-router-dom';
//Pages
import { Layout } from './pages/Layout';
import { Home } from './pages/Home/Home';
import { Notfound } from './pages/Notfound/Notfound';
import { TestPage } from './pages/TestPage/TestPage';



const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout /> } >
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/test-page" element={<TestPage />} />
        </Route>
      </Routes>
  );
};



export default App;
