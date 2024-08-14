import './App.css';
import React from "react";
import Menu from "../Menu/Menu";
import TarotGame from "../Tarot/Tarot";
import CssBaseline from '@mui/material/CssBaseline';
import {Route, Routes, HashRouter as Router} from "react-router-dom";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import DiamondSquare from "../Portfolio/Components/DiamondSquare";

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <Router basename={'/'}>
                <Menu/>
                <div className={'pageContainer text-center'}>
                    <Routes>
                        <Route path={'/'} element={<TarotGame/>}/>
                        <Route path={'/about'} element={<Home/>}/>
                        <Route path={'/portfolio'} element={<Portfolio/>}/>
                        <Route path={'/tarot'} element={<TarotGame/>}/>
                        <Route path={'/landscape-generator'} element={<DiamondSquare/>}/>
                        <Route path={'/nes-emulator'} element={<TarotGame/>}/>

                    </Routes>
                </div>
            </Router>
        </div>
);
}

export default App;
