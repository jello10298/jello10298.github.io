import './App.css';
import React from "react";
import Menu from "../Menu/Menu";
import CssBaseline from '@mui/material/CssBaseline';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import ChangeTitleOnRouteChange from "../ChangeTitleOnRouteChange/ChangeTitleOnRouteChange";
import {routeData} from "./routeData";
import ColorPalette from "../ColorPalette/ColorPalette";

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <Router basename={'/'}>
                <ChangeTitleOnRouteChange />
                <Menu/>
                <div className={'pageContainer text-center'}>
                    <Routes>
                        {
                            routeData.map((item, index) => (
                                <Route key={index} path={item.path} element={item.element}></Route>
                            ))
                        }
                    </Routes>
                    <div style={{opacity: 0}}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <ColorPalette/>
            </Router>
        </div>
    );
}

export default App;
