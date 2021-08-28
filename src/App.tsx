import React from 'react';
import { Button } from './components/Button';
import { Stack } from './components/Stack';

function App() {
    return (
        <Stack
            direction={{
                mobile: 'vertical',
                desktop: 'horizontal'
            }}>
            <Button>Test</Button>
            <Button size="small">Test</Button>
        </Stack>
    );
}

export default App;
