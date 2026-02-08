// src/App.js
import React from 'react';
import HomePage from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import { useFetchMenu } from './hooks/useFectMain';

function App() {

  const { menu, menuLoading, menuError } = useFetchMenu();

  const content = menuLoading ? (
    <div className="d-flex position-fixed top-0 start-0 w-100 h-100 justify-content-center align-items-center" style={{ zIndex: 1050, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}  >
      <div className="spinner-border text-primary" style={{  width: '3rem', height: '3rem', borderWidth: '0.35rem' }} 
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    ) : menuError ? (
      <div className="text-danger">Failed to load menu</div>
    ) : Array.isArray(menu) && menu.length > 0 ? (
      <Main menu={menu} />
    ) : null;

  return (
    <div className="App">
      <BrowserRouter>
        {content}
      </BrowserRouter>
    </div>
  );
}

export default App;