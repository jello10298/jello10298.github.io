// src/App.js
import React, {useEffect, useRef, useState} from 'react';
import './TicTacToe.css';
import {Button} from "@mui/material";

const Square = ({ value, onClick, className }) => {
    return (
        <button className={`square ${className}`} onClick={onClick}>
            {value}
        </button>
    );
};

const Board = ({ squares, onClick }) => {
    const renderSquare = (i, row, col) => {
        return <Square
            value={squares[i]}
            onClick={() => onClick(i)}
            className={`col-${col} row-${row}`}
        />;
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0, 0, 0)}
                {renderSquare(1, 0, 1)}
                {renderSquare(2, 0, 2)}
            </div>
            <div className="board-row">
                {renderSquare(3, 1, 0)}
                {renderSquare(4, 1, 1)}
                {renderSquare(5, 1, 2)}
            </div>
            <div className="board-row">
                {renderSquare(6, 2, 0)}
                {renderSquare(7, 2, 1)}
                {renderSquare(8, 2, 2)}
            </div>
        </div>
    );
};

const isBoardFull = (squares) => {
    return squares.every((square) => square !== null);
};

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const catMeowAudioRef = useRef(null);
    const funnyCatMeowAudioRef = useRef(null);
    const angryCatMeowAudioRef = useRef(null);

    const handleClick = (i) => {
        const historyCopy = history.slice(0, stepNumber + 1);
        const current = historyCopy[historyCopy.length - 1];
        const squares = current.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(historyCopy.concat([squares]));
        setStepNumber(historyCopy.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const restartGame = () => {
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
        setXIsNext(true);
    };

    const current = history[stepNumber];
    const winner = calculateWinner(current);

    useEffect(() => {
        if (!winner && isBoardFull(current)) {
            const audioRefs = [catMeowAudioRef, funnyCatMeowAudioRef, angryCatMeowAudioRef];
            const randomRef = audioRefs[Math.floor(Math.random() * audioRefs.length)];
            randomRef.current.play();
        }
    }, [current, winner]);

    const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (isBoardFull(current)) {
        status = `Cat's game`;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current} onClick={(i) => handleClick(i)}/>
            </div>
            <div className="game-info">
                <div className="status">{status}</div>
                <ol className="history">{moves}</ol>
                <Button
                    className="restart-game"
                    variant="contained"
                    style={{backgroundColor: 'var(--menu-color)', color: 'var(--background-color)'}}
                    onClick={restartGame}>
                    Restart Game
                </Button>
            </div>
            <audio ref={catMeowAudioRef}>
                <source src="/cat-meow-6226.mp3" type="audio/mpeg"/>
            </audio>
            <audio ref={funnyCatMeowAudioRef}>
                <source src="/funny-meow-110120.mp3" type="audio/mpeg"/>
            </audio>
            <audio ref={angryCatMeowAudioRef}>
                <source src="/angry-cat-meow-82091.mp3" type="audio/mpeg"/>
            </audio>
        </div>
    );
};

// Helper function to calculate the winner
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};

export default Game;