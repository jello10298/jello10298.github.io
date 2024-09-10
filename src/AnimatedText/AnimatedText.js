import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import SplitType from 'split-type';
import './AnimatedText.css'; // Ensure this CSS file includes the required styles

const AnimatedText = ({text}) => {
    const titleRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;

        // Split text into chars (using SplitType)
        const split = new SplitType(title, {types: 'chars'});

        // Initial animation
        gsap.from(split.chars, {
            duration: 0.5,
            y: 100,
            stagger: 0.1,
            ease: 'back.out',
        });

        // Spin animation on hover
        const titleSpinTL = gsap.timeline({paused: true});
        titleSpinTL.to(split.chars, {
            duration: 0.5,
            rotateY: 360,
            stagger: 0.1,
            repeat: 1,
            yoyo: true,
        });

        const handleMouseEnter = () => {
            titleSpinTL.restart();
        };

        title.addEventListener('mouseenter', handleMouseEnter);

        // Cleanup event listener on component unmount
        return () => {
            title.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [text]);

    return (
        <div className="title_centered">
            <div className="title_container">
                <p className="title" ref={titleRef}>{text}</p>
            </div>
        </div>
    );
};

export default AnimatedText;