import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Bienvenue from './Conponents/Bienvenue';
import LoginControl from './Conponents/LoginControl';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginControl></LoginControl>} />
                <Route path="/bienvenue" element={<Bienvenue></Bienvenue>} />
            </Routes>
        </Router>
    );
};

export default App;
