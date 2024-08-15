import TarotGame from "../Tarot/Tarot";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import DiamondSquare from "../Portfolio/Components/DiamondSquare";
import React from "react";

export const routeData = [
    {
        path: '/',
        element: <TarotGame/>,
        title: 'Home',
    },
    {
        path: '/about',
        element: <Home/>,
        title: 'About Me',
    },
    {
        path: '/portfolio',
        element: <Portfolio/>,
        title: 'Portfolio',
    },
    {
        path: '/tarot',
        element: <TarotGame/>,
        title: 'Dali-inspired Tarot Game',
    },
    {
        path: '/landscape-generator',
        element: <DiamondSquare/>,
        title: 'Landscape Generator',
    }
];