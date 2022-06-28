import './App.css';
import {useState} from 'react';
import Counter from "./components/Counter";
import Search from "./components/Search";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

function App() {
    return (
        <div >
            <Router>
                <div >
                    <nav>
                        <ul>
                            <li>
                                <Link to="/counter">Counter</Link>
                            </li>
                            <li>
                                <Link to="/search">Search Bar</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes >
                        <Route path="/counter" element={<Counter/>}/>
                        <Route path="/search" element={<Search/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;
