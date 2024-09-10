import './Home.css';
import {Link} from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import ProfileLayout from "../ProfileLayout/ProfileLayout";
import AnimatedText from "../AnimatedText/AnimatedText";

function Home() {
    return (
        <div className={'home'}>
            {/*<h1 className={'alex-brush-regular my-name'}>Angelo Gonzalez</h1>*/}
            <AnimatedText text={'Angelo Gonzalez'} />

            {/*<AboutMe />*/}

            <ProfileLayout />

            {/*<img*/}
            {/*    className={'homeImage'}*/}
            {/*    src='/Firefly-Dali-inspired-image-of-the-magician-tarot-card-that-contains-a-transparent-Augusta-window-in.png'*/}
            {/*    alt={'Magician Tarot Card'}/>*/}
            {/*<h2>The Magician</h2>*/}
            {/*<p>We all have natural talents, discover yours.</p>*/}
            {/*<Link to={'/tarot'}>Play Now</Link>*/}
        </div>
    );
}

export default Home;
