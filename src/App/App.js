import './App.css';
import Menu from "../Menu/Menu";
import TarotGame from "../Tarot/Tarot";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Menu />
            <header className="App-header">
                {/*<img src='/Firefly-Dali-inspired-image-of-the-magician-tarot-card-that-contains-a-transparent-Augusta-window-in.png' alt={'Magician Tarot Card'} />*/}
                <TarotGame />
            </header>
        </div>
    );
}

export default App;
