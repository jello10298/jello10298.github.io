import React from "react";
import {useTarotGameLogic} from "../TarotGameLogicContext/TarotGameLogicContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

const TarotCard = ({card, isFlippable = true, isFlipped = false, gameCard = false, isFlippedCallback = null, className = null}) => {
    const { flipCard, isCardFlipped, toggleModal, isCardModalOpen } = useTarotGameLogic();

    return (
        <div className="tarot-card">
            <div className={`daliTarotCard ${gameCard && isFlipped ? 'flipped' : ''} ${!gameCard && isCardFlipped(card) ? 'flipped' : ''} ${className ? className : ''}`} onClick={() => {
                if (isFlippedCallback) {
                    isFlippedCallback();
                } else {
                    isFlippable && flipCard(card)
                }
            }}>
                <img src={'dali/' + card.image} alt={card.name} className={'daliTarotCardFront'}/>
                <img src={'dali/card-back.jpg'} alt={card.name} className={'daliTarotCardBack'}/>
            </div>
            <div className={`cardInfo ${gameCard && isFlipped ? 'flipped' : ''} ${!gameCard && isCardFlipped(card) ? 'flipped' : ''}`}>
                <h2 className={'cardName'}>{card.name}</h2>
                <p className={'cardDesc'}><b>{card.title}</b> - {card.desc}</p>
                <button className={'button cardLearnMore'}
                        onClick={() => {
                            toggleModal(card)
                        }}>
                    Learn More <ArrowForwardIosIcon fontSize={'small'}/>
                </button>
            </div>

            <Modal
                isOpen={isCardModalOpen(card)}
                onRequestClose={() => {
                    toggleModal(card)
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
                            <p><b>{card.title}</b><br/><span
                                dangerouslySetInnerHTML={{__html: card.longDesc}}/></p>
                        }

                        {card.desc &&
                            <p><b>Practical Advice</b><br/>{card.desc}</p>
                        }

                        {card.source &&
                            <p><b>Pictorial Sources</b><br/>{card.source}</p>
                        }

                        <div className="close-icon" onClick={() => {
                            toggleModal(card)
                        }}><CloseIcon/></div>
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default TarotCard;