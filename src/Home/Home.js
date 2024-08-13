import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <h1 className={'alex-brush-regular my-name'}>Angelo Gonzalez</h1>
            <img
                className={'homeImage'}
                src='/Firefly-Dali-inspired-image-of-the-magician-tarot-card-that-contains-a-transparent-Augusta-window-in.png'
                alt={'Magician Tarot Card'}/>
            <h2>The Magician</h2>
            <p>We all have natural talents, discover yours.</p>
            <Link to={'/tarot'}>Play Now</Link>
        </>
    );
}

export default Home;
