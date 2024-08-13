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
    const [showReloadGame, setShowReloadGame] = useState(false);

    const welcomeScreen = createRef();

    const drawCard = () => {
        const drawnCards = [];
        while (drawnCards.length < 3) {
            const index = Math.floor(Math.random() * tarotData.length);
            if (!drawnCards.find(card => card === tarotData[index])) {
                drawnCards.push(tarotData[index]);
            }
        }
        const yourPresent = drawnCards[0];
        const yourPast = drawnCards[1];
        const yourFuture = drawnCards[2];
        setCards([yourPast, yourPresent, yourFuture]);

        setShowReloadGame(true);
    };

    const hideWelcome = () => {
        if (welcomeScreen.current !== null) {
            welcomeScreen.current.style.height = 0;
            welcomeScreen.current.style.opacity = 0;
            welcomeScreen.current.style.pointerEvents = 'none';
            return true;
        }
        return false;
    }

    return (
        <>
            <div
                className="welcome"
                ref={welcomeScreen}
                onClick={() => { hideWelcome() && drawCard() }}/>

            <Grid container className={'readingContainer grid'}>
                {
                    cards.map((card, index) =>
                        <Grid item md={4} key={index}>
                            <Item className={"cardBackground white"}>
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
            {
                showReloadGame &&
                <div className={'tryAgain'} onClick={() => drawCard()}>
                    <u>Try Again?</u>
                </div>
            }
        </>
    )
}

export default TarotGame;