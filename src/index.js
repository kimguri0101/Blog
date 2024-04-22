import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Link to="/" className='logo'><h1>BLOOG</h1></Link>
      </div>
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path="write" element={<PostWritePage/>}/>
      <Route path="post/:id" element={<PostViewPage/>}/>
    </Routes>
  </BrowserRouter>
  
);

