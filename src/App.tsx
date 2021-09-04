import React from 'react';
import { ArrowRight } from 'react-feather';

import { Box } from './components/Box';
import { Stack } from './components/Stack';
import { Button } from './components/Button';

function App() {
    return (
        <Box padding="xl">
            <Stack
                direction={{
                    mobile: 'vertical',
                    desktop: 'horizontal'
                }}
                space={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
                align="center">
                <Button onClick={() => console.log('Test')}>Test</Button>
                <Button onClick={() => console.log('Test')}>
                    <ArrowRight />
                    Test
                </Button>
                <Button variant="ghost" onClick={() => console.log('Test')}>
                    Test
                </Button>
                <Button variant="link" onClick={() => console.log('Test')}>
                    Test
                </Button>
                <Button color="highlight" onClick={() => console.log('Test')}>
                    Test
                </Button>
                <Button
                    variant="ghost"
                    color="highlight"
                    onClick={() => console.log('Test')}>
                    Test
                </Button>
                <Button
                    variant="link"
                    color="highlight"
                    onClick={() => console.log('Test')}>
                    Test
                </Button>
                <Button as="a" href="https://timoclasen.de">
                    Link
                </Button>
                <Button variant="link" as="a" href="https://timoclasen.de">
                    <ArrowRight />
                    Link
                </Button>
            </Stack>
        </Box>
    );
}

export default App;
