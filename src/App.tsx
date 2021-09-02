import React from 'react';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Stack } from './components/Stack';
import { Text } from './components/Text';
import { themeClass } from './theme.css';

function App() {
    return (
        <Box className={themeClass}>
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
                <Box
                    as="button"
                    padding="md"
                    background={{ hover: 'gray6', focus: 'indigo6' }}>
                    Test
                </Box>
                <Text as="h1" variant="highlight" size="5xl">
                    Das ist ein Text
                </Text>
            </Stack>
        </Box>
    );
}

export default App;
