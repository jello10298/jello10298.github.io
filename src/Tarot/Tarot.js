import React, {createRef, useState} from 'react';
import tarotData from './data';
import './Tarot.css';

import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Grid} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Modal from 'react-modal';
import {Close} from "@mui/icons-material";
Modal.setAppElement('#root');

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
    const [isFlipped, setIsFlipped] = useState([false, false, false]);
    const [isOpen, setIsOpen] = useState([false, false, false]);

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

    const flipCard = (index) => {
        setIsFlipped(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }

    const allCardsFlipped = () => {
        return isFlipped.every(value => value === true);
    }

    const resetGame = () => {
        setIsFlipped([false, false, false]);
    }

    const toggleModal = (index) => {
        setIsOpen((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
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
                                    <div className={`daliTarotCard ${isFlipped[index] ? 'flipped' : ''}`} onClick={() => {
                                        flipCard(index);
                                    }}>
                                        <img src={'dali/' + card.image} alt={card.name} className={'daliTarotCardFront'}/>
                                        <img src={'dali/card-back.jpg'} alt={card.name} className={'daliTarotCardBack'} />
                                    </div>
                                    <div className={`cardInfo ${isFlipped[index] ? 'flipped' : ''}`}>
                                        <h2 className={'cardName'}>{card.name}</h2>
                                        <p className={'cardDesc'}><b>{card.title}</b> - {card.desc}</p>
                                        <a className={'cardLearnMore'} href={'#'} onClick={() => {
                                            toggleModal(index)
                                        }}>Learn More <ArrowForwardIosIcon fontSize={'small'}/></a>
                                    </div>

                                    <Modal
                                        isOpen={isOpen[index]}
                                        onRequestClose={() => {
                                            toggleModal(index)
                                        }}
                                        contentLabel="My dialog"
                                        className="mymodal"
                                        overlayClassName="myoverlay"
                                        closeTimeoutMS={500}
                                    >
                                        <div className="modal-content">
                                            <div className="graphic-content">
                                                <img src={'dali/' + card.image} alt={card.name}
                                                    style={{
                                                        width: '100%',
                                                    }}/>
                                            </div>
                                            <div className="text-content">
                                                {card.name &&
                                                    <h2>{card.name}</h2>
                                                }
                                                {card.longDesc &&
                                                    <p><b>{card.title}</b><br/><div dangerouslySetInnerHTML={{ __html: card.longDesc }} /></p>
                                                }

                                                {card.desc &&
                                                    <p><b>Practical Advice</b><br />{card.desc}</p>
                                                }

                                                {card.source &&
                                                    <p><b>Pictorial Sources</b><br />{card.source}</p>
                                                }

                                                <div className="close-icon" onClick={() => {
                                                    toggleModal(index)
                                                }}><CloseIcon/></div>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </Item>
                        </Grid>
                    )
                }
            </Grid>
            {
                showReloadGame &&
                <div className={`tryAgain ${allCardsFlipped() ? 'visible' : ''}`} onClick={() => {
                    resetGame();
                    setTimeout(() => drawCard(), 1000);
                }}>
                    <u>Try Again?</u>
                </div>
            }
        </>
    )
}

export default TarotGame;