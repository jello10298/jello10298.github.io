import './Home.css';
import ProfileLayout from "../ProfileLayout/ProfileLayout";
import AnimatedText from "../AnimatedText/AnimatedText";
import Portfolio from "../Portfolio/Portfolio";
import Timeline from "../Timeline/Timeline";
import React from "react";

function Home() {
    return (
        <div className={'home'}>
            <AnimatedText text={'Angelo Gonzalez'}/>
            <ProfileLayout/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/*<Portfolio/>*/}
            {/*<Timeline/>*/}
        </div>
    );
}

export default Home;
