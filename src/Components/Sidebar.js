import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);

    const toggleBooksDropdown = () => {
        setIsBooksDropdownOpen(!isBooksDropdownOpen);
    };

    return (
        <aside className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                
                <li className="nav-item">
                    <div className="nav-link" onClick={toggleBooksDropdown}>
                        <i className="bi bi-circle"></i>
                        <span>Books</span>
                        <i className={`bi ${isBooksDropdownOpen ? 'bi-caret-down-fill' : 'bi-caret-right-fill'}`}></i>
                    </div>
                    {isBooksDropdownOpen && (
                        <ul className="dropdown">
                             <li className="dropdown-item">
                                <Link to="/books" className="nav-link">
                                    <i className="bi bi-list"></i>
                                    <span>Get All Books</span>
                                </Link>
                            </li>
                            <li className="dropdown-item">
                                <Link to="/books/add" className="nav-link">
                                    <i className="bi bi-plus-circle"></i>
                                    <span>Add Book</span>
                                </Link>
                            </li>
                           
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
}
