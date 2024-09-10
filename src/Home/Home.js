import './Home.css';
import ProfileLayout from "../ProfileLayout/ProfileLayout";
import AnimatedText from "../AnimatedText/AnimatedText";

function Home() {
    return (
        <div className={'home'}>
            <AnimatedText text={'Angelo Gonzalez'} />
            <ProfileLayout />
        </div>
    );
}

export default Home;
