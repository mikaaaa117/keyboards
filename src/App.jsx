import Header from './components/Header/Header';
import './App.scss';
import Home from './components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Drawer from './components/Drawer/Drawer';
import { useState } from 'react';

function App() {
  const [drawerActive, setDrawerActive] = useState(false);

  return (
    <Router>
      <div className="wrapper">
        <Header setDrawerActive={setDrawerActive} />
        <Home />
        <Drawer active={drawerActive} setActive={setDrawerActive} />
      </div>
    </Router>
  );
}

export default App;
