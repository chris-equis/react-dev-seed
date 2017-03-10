import React from 'react';
import { render } from 'react-dom';

import './stylesheets/app.scss';

class App extends React.Component {
    render () {
        return <p>It works!</p>;
    }
}

render(<App/>, document.getElementById('app'));