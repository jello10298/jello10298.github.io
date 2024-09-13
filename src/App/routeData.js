import TarotGame from "../Tarot/Tarot";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import DiamondSquare from "../Portfolio/Components/DiamondSquare";
import React from "react";
import {TarotGameLogicProvider} from "../TarotGameLogicContext/TarotGameLogicContext";
import tarotData from "../Tarot/data";
import TicTacToe from "../TicTacToe/TicTacToe";
import TarotWithRedux from "../TarotWithRedux/TarotWithRedux";
import Timeline from "../Timeline/Timeline";

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
        path: '/tarot-v1',
        element: <TarotGameLogicProvider cards={tarotData}>
            <TarotGame/>
        </TarotGameLogicProvider>,
        title: 'Dali-inspired Tarot Game v1',
    },
    {
        path: '/tarot-v2',
        element: <TarotWithRedux/>,
        title: 'Dali-inspired Tarot Game v2',
    },
    {
        path: '/landscape-generator',
        element: <DiamondSquare/>,
        title: 'Landscape Generator',
    },
    {
        path: '/tic-tac-toe',
        element: <TicTacToe/>,
        title: 'Tic Tac Toe',
    },
    {
        path: '/timeline',
        element: <Timeline />,
        title: 'Work/Education Timeline',
    }
];