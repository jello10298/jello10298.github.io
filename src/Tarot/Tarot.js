import React, {createRef, useState} from 'react';
import tarotData from './data';
import './Tarot.css';

import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Grid} from "@mui/material";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function TarotGame() {
    const [cards, setCards] = useState([]);

    const gameScreen = createRef();

    const drawCard = () => {
        let drawnCards = [];
        while (drawnCards.length < 3) {
            let index = Math.floor(Math.random() * tarotData.length);
            if (!drawnCards.find(card => card === tarotData[index])) {
                drawnCards.push(tarotData[index]);
            }
        }

        // const randomCard = tarotData[Math.floor(Math.random() * tarotData.length)];

        setCards(drawnCards);
        gameScreen.current.style.height = 0;
        gameScreen.current.style.opacity = 0;
        gameScreen.current.style.pointerEvents = 'none';
    };

    return (
        <>
            <div className="gameScreen" ref={gameScreen}>
                <div className="backgroundImage" onClick={() => drawCard()}/>
            </div>

            <Grid container spacing={2}>
                {
                    cards.map((card, index) =>
                        <Grid item md={4} key={index}>
                            <Item className="cardBackground white">
                                <div className="card">
                                    <h2 className={'alex-brush-regular tarotHeading'}>
                                        {
                                            function () {
                                                switch (index) {
                                                    case 0:
                                                        return 'Your Past';
                                                    case 1:
                                                        return 'Your Present';
                                                    case 2:
                                                        return 'Your Future';
                                                    default:
                                                        return null;
                                                }
                                            }()
                                        }
                                    </h2>
                                        <img src={'dali/' + card.image} alt={card.name}/>
                                        <div>
                                            <h2 className="cardName">{card.name}</h2>
                                            <p className="cardDesc"><b>{card.title}</b> - {card.desc}</p>
                                        </div>
                                </div>
                            </Item>
                        </Grid>
                    )
                }
            </Grid>
        </>
    )
}

export default TarotGame;