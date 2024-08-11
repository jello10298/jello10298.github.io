import './App.css';
import React from "react";
import Menu from "../Menu/Menu";
import TarotGame from "../Tarot/Tarot";
import CssBaseline from '@mui/material/CssBaseline';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <Menu/>
            <div className={'pageContainer'}>
                <Router>
                    <Routes>
                        <Route path={'/'} element={<TarotGame/>}/>
                        <Route path={'/about'} element={<Home/>}/>
                        <Route path={'/portfolio'} element={<Portfolio/>}/>
                        <Route path={'/tarot'} element={<TarotGame/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
);
}

export default App;
