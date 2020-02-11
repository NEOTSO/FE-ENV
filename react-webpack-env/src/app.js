import React from 'react';
import { render } from 'react-dom';

import './styles/index.scss';

const App = (props) => {
    return (
        <h1>hi, there.</h1>
    );
};

const app = document.createElement('div');
app.className = 'app';
document.body.appendChild(app);
render(<App />, app);