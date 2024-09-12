import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TarotGame from './TarotGame';
import './TarotWithRedux.css';

function TarotWithRedux() {
    return (
        <Provider store={store}>
            <div className="TarotWithRedux">
                <TarotGame />
            </div>
        </Provider>
    );
}

export default TarotWithRedux;