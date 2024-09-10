import TarotGame from "../Tarot/Tarot";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import DiamondSquare from "../Portfolio/Components/DiamondSquare";
import React from "react";
import {TarotGameLogicProvider} from "../TarotGameLogicContext/TarotGameLogicContext";
import tarotData from "../Tarot/data";

export const routeData = [
    {
        path: '/',
        element: <TarotGameLogicProvider cards={tarotData}>
            <TarotGame/>
        </TarotGameLogicProvider>,
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
        element: <TarotGameLogicProvider cards={tarotData}>
            <TarotGame/>
        </TarotGameLogicProvider>,
        title: 'Dali-inspired Tarot Game',
    },
    {
        path: '/landscape-generator',
        element: <DiamondSquare/>,
        title: 'Landscape Generator',
    }
];