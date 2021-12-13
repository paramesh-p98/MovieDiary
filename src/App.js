import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Watchlist, Watched, Add } from './components'
import { GlobalProvider } from './context/GlobalState'
import './lib/font-awesome/css/all.min.css';
import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/MovieDiary/" element={<Watchlist />} />
          <Route exact path="/MovieDiary/watched" element={<Watched />} />
          <Route exact path="/MovieDiary/add" element={<Add />} />
        </Routes>
      </Router >
    </GlobalProvider>
  );
}

export default App;
