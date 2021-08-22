import React from 'react';
import { atoms } from '../sprinkles.css';
import { Button } from './components/Button';

function App() {
    return (
        <section className={atoms({ padding: 'large' })}>
            <Button>Test</Button>
        </section>
    );
}

export default App;
