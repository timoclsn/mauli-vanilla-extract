import React from 'react';
import { Box } from './components/Box';
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
            <Button
                size={{
                    mobile: 'small',
                    tablet: 'normal',
                    desktop: 'small'
                }}>
                Test
            </Button>
            <Box as="section" padding="md" background="indigo10">
                Test
            </Box>
        </Stack>
    );
}

export default App;
