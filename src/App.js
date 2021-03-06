import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
      {/* {Side bar} */}
      <Sidebar />
      {/* {Feed} */}
      <Feed />
      {/* {Widgets} */}
    </div>
  );
}

export default App;
