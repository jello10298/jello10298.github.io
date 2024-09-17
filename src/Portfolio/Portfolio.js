import './Portfolio.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {Gallery} from "react-grid-gallery";
import {
    tilesData,
    defaultImages,
    getArrowStyle
} from "./tilesData";
import AnimatedText from "../AnimatedText/AnimatedText";
import React, {useState} from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageComponent = (props) => {
    const [show, setShow] = useState(true);
    const {arrowBackgroundColor, ...imageProps} = props.imageProps;

    if (show) {
        return (<div>
            <img {...imageProps} alt={imageProps.name}/>
            <div className="portfolio-grid-arrow">
                <span style={{backgroundColor: 'rgba(160,160,160,0.3)', ...getArrowStyle(imageProps.src)}}>
                    <ArrowOutwardIcon/>
                </span>
            </div>
        </div>);
    }

    return (
        <div style={{...props.imageProps.style, textAlign: "center"}} onMouseOver={() => setShow(true)}>
            Hover to show
        </div>
    );
};

function Portfolio() {
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <div className={'portfolio-container'}>
                <AnimatedText text={'Portfolio'}/>

                <div style={{
                    maxWidth: '1152px',
                    margin: '0 auto',
                }}>
                    <Gallery images={tilesData}
                             enableImageSelection={false}
                             onClick={(index) => {
                                 if (tilesData[index].name) {
                                     setSelectedIndex(index);
                                     setShowModal(true);
                                 }
                             }}
                             thumbnailImageComponent={ImageComponent}
                    />
                </div>

                {showModal &&
                    <Modal
                        isOpen={showModal}
                        onRequestClose={() => {
                            setShowModal(false)
                        }}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                    >
                        <div className="modal-content">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <AnimatedText text={tilesData[selectedIndex].name}/>
                                </div>
                                <div style={{
                                    backgroundColor: 'var(--background-color)',
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    <p>
                                        {tilesData[selectedIndex].desc}
                                    </p>
                                    {
                                        (tilesData[selectedIndex].images &&
                                            <AutoplaySlider
                                                play={true}
                                                cancelOnInteraction={true}
                                                interval={5000}
                                                animation={'cubeAnimation'}
                                                className="awesome-slider"
                                                fillParent={false}
                                            >
                                                {
                                                    tilesData[selectedIndex].images.map((image) => (
                                                        <div data-src={image}/>
                                                    ))
                                                }
                                            </AutoplaySlider>) ||
                                        (
                                            <>
                                                <h1><b>{tilesData[selectedIndex].name}</b> Images - <i>Not Available</i>
                                                </h1>
                                                <h2>Here are some older portfolio pieces to view</h2>
                                                <AutoplaySlider
                                                    play={true}
                                                    // cancelOnInteraction={false}
                                                    interval={2000}
                                                    animation={'cubeAnimation'}
                                                    className="awesome-slider"
                                                    fillParent={false}
                                                >
                                                    {
                                                        defaultImages.map((image) => (
                                                            <div data-src={image}/>
                                                        ))
                                                    }
                                                </AutoplaySlider>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="close-icon" onClick={() => {
                                setShowModal(false);
                            }}><CloseIcon fontSize={"large"}/></div>
                        </div>
                    </Modal>
                }

                <br/>
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
        </>
    );
}

export default Portfolio;