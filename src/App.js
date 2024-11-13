import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Books from './BooksComponents/Books';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Header component */}

        <div className="content-wrapper">
          <Sidebar /> {/* Sidebar component */}

          {/* Main Content Area */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/books" element={<Books />} /> {/* Books route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
