import React from 'react';
import { ArrowRight } from 'react-feather';

import { Stack } from './components/Stack';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Heading } from './components/Heading';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { Inline } from './components/Inline';
import { Label } from './components/Label';
import { sprinkles } from './sprinkles.css';
import { Link } from './components/Link';
import { Inset } from './components/Inset';
import { Box } from './components/Box';
import { HiddenVisually } from './components/HiddenVisually';

function App() {
    return (
        <Container>
            <Inset insetX="2x" insetY="4x">
                <Stack space="8x">
                    <Stack>
                        <Heading as="h1" size="60px">
                            Mauli Design System
                        </Heading>
                        <Text size="20px" color="highlight">
                            [WIP] Design System Playground
                        </Text>
                    </Stack>

                    <Stack
                        direction={{
                            default: 'vertical',
                            '640px': 'horizontal'
                        }}>
                        <Link url="#">
                            <Card fullWidth>
                                <Stack>
                                    <Heading color="dark">Card Normal</Heading>
                                    <Text>
                                        dsj ad sadhsa dhsdg asdgsa gdsagd
                                        asdgsgd agd sgadsagdsasadsadsadsa dsa
                                        dsad sadsah dsahd sakdhashdk.
                                    </Text>
                                    <Inline>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                        <Label>Label</Label>
                                    </Inline>
                                    <Stack
                                        direction={{
                                            default: 'vertical',
                                            '640px': 'horizontal'
                                        }}
                                        justify="end"
                                        align={{
                                            default: 'start',
                                            '640px': 'center'
                                        }}
                                        wrap
                                        className={sprinkles({
                                            width: 'full'
                                        })}>
                                        <Button
                                            color="highlight"
                                            onClick={() => alert('Test')}>
                                            <ArrowRight />
                                            Button
                                        </Button>
                                        <Button variant="ghost">Ghost</Button>
                                        <Button
                                            as="a"
                                            variant="link"
                                            url="https:timoclasen.de"
                                            external>
                                            <ArrowRight />
                                            Link
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Link>

                        <Card color="highlight" fullWidth>
                            <Stack>
                                <Heading color="light">Card Highlight</Heading>
                                <Text color="light" truncate={5}>
                                    <Link url="#">Lorem</Link> ipsum dolor sit
                                    amet, consectetuer adipiscing elit.{' '}
                                    <Link
                                        variant="normal"
                                        url="https://timoclasen.de"
                                        external>
                                        Aenean commodo
                                    </Link>{' '}
                                    ligula eget dolor. Aenean massa. Cum sociis
                                    natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Donec quam
                                    felis, ultricies nec, pellentesque eu,
                                    pretium quis, sem.{' '}
                                    <Link variant="highlight" url="#">
                                        Nulla consequat
                                    </Link>{' '}
                                    massa quis enim. Donec pede justo, fringilla
                                    vel, aliquet nec, vulputate eget, arcu. In
                                    enim justo, rhoncus ut, imperdiet a,
                                    venenatis vitae, justo. Nullam dictum felis
                                    eu pede mollis pretium. Integer tincidunt.
                                    Cras dapibus. Vivamus elementum semper nisi.
                                    Aenean vulputate eleifend tellus.
                                </Text>
                                <Box color="gray1">
                                    <ArrowRight />
                                    <HiddenVisually>
                                        Pfeil nach rechts
                                    </HiddenVisually>
                                </Box>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>
            </Inset>
        </Container>
    );
}

export default App;
