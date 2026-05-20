// src/App.js
import React, { useEffect } from 'react';
import HomePage from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import { useFetchMenu, useFetchSetting } from './hooks/useFectMain';
import config from './config';

function App() {
  const { menu, menuLoading, menuError } = useFetchMenu();
  const { setting, settingLoading, settingError } = useFetchSetting()

  
  useEffect(() => {
    if (!setting) return;

    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = setting.favicon
                  ? `${config.app.url}/storage/${setting.favicon}` 
                  : "/favicon.ico";
    }

    document.title = setting.web_name || "Real Estate";

  }, [setting]);

  const content = (menuLoading || settingLoading) ? (
    <div
      className="d-flex position-fixed top-0 start-0 w-100 h-100 justify-content-center align-items-center"
      style={{ zIndex: 1050, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
    >
      <div
        className="spinner-border text-primary"
        style={{ width: '3rem', height: '3rem', borderWidth: '0.35rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (menuError || settingError) ? (
    <div className="text-danger">Failed to load data</div>
  ) : (
    <Main menu={menu} setting={setting} />
  );

  return (
    <div className="App">
      <BrowserRouter>
        {content}
      </BrowserRouter>
    </div>
  );
}

export default App;