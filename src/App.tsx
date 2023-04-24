import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { PokemonsLayout } from './pages/PokemonsLayout';
import { Home } from './pages/home/Home';
import { Types } from './pages/types/Types';
import { SearchResult } from './pages/searchResult/SearchResult';
import { Navigate } from 'react-router-dom';
import { Page404 } from './pages/Page404/Page404';

const App: React.FC=()=> {
  return (
    <>
    <Routes>
      <Route path='/' element={<PokemonsLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/:type' element={<Types/>}/>
        <Route path='/search/:q' element={<SearchResult/>} />
        <Route path='/404' element={<Page404/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
