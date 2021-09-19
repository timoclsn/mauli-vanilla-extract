import React from 'react';
import { ArrowRight } from 'react-feather';

import { Box } from './components/Box';
import { Stack } from './components/Stack';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Heading } from './components/Heading';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { Inline } from './components/Inline';
import { Label } from './components/Label';

function App() {
    return (
        <Container>
            <Box
                fontFamily="sans"
                padding={{
                    mobile: 'md',
                    tablet: '2xl'
                }}>
                <Stack space="2xl">
                    <Stack>
                        <Heading>Mauli Design System</Heading>
                        <Text as="p" color="highlight">
                            [WIP] Design System Playground
                        </Text>
                    </Stack>

                    <Stack
                        direction={{
                            mobile: 'vertical',
                            tablet: 'horizontal'
                        }}>
                        <Card fullWidth>
                            <Stack>
                                <Heading color="dark" size="2xl">
                                    Card Normal
                                </Heading>
                                <Text as="p">
                                    dsj ad sadhsa dhsdg asdgsa gdsagd asdgsgd
                                    agd sgadsagd.
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
                                        mobile: 'vertical',
                                        tablet: 'horizontal'
                                    }}
                                    justify="end"
                                    align={{
                                        mobile: 'start',
                                        tablet: 'center'
                                    }}
                                    wrap
                                    fullWith>
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
                                        href="https:timoclasen.de"
                                        target="_blank">
                                        <ArrowRight />
                                        Link
                                    </Button>
                                </Stack>
                            </Stack>
                        </Card>

                        <Card color="highlight" fullWidth>
                            <Stack>
                                <Heading color="light" size="2xl">
                                    Card Highlight
                                </Heading>
                                <Text as="p" color="light">
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis,
                                    ultricies nec, pellentesque eu, pretium
                                    quis, sem. Nulla consequat massa quis enim.
                                    Donec pede justo, fringilla vel, aliquet
                                    nec, vulputate eget, arcu. In enim justo,
                                    rhoncus ut, imperdiet a, venenatis vitae,
                                    justo. Nullam dictum felis eu pede mollis
                                    pretium. Integer tincidunt. Cras dapibus.
                                    Vivamus elementum semper nisi. Aenean
                                    vulputate eleifend tellus.
                                </Text>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
}

export default App;
