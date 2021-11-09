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
import { Link } from './components/Link';
import { Inset } from './components/Inset';
import { Box } from './components/Box';
import { HiddenVisually } from './components/HiddenVisually';
import { List } from './components/List';
import { ListItem } from './components/ListItem';
import { Bleed } from './components/Bleed';
import { Skeleton } from './components/Skeleton';
import { HeadingLevel } from './components/Heading/HeadingLevel';
import { Columns } from './components/Columns';
import { Column } from './components/Column';
import { Hidden } from './components/Hidden';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Crumb } from './components/Crumb';

function App() {
  return (
    <Container>
      <HeadingLevel>
        <Inset insetX="2x" insetY="4x">
          <Stack space="8x">
            <Stack>
              <Heading level={1}>Mauli Design System</Heading>
              <Text size="20px" color="highlight">
                Experimental design system exploration with React and Vanilla
                Extract.
              </Text>
              <Breadcrumbs>
                <Crumb url="/">Home</Crumb>
                <Crumb url="/living">Living Room</Crumb>
                <Crumb url="/living/couch">Couches</Crumb>
                <Crumb url="/living/couch/sectional" isCurrentPage>
                  Sectionals
                </Crumb>
              </Breadcrumbs>
            </Stack>

            <Columns space="2x" collapseBelow="640px">
              <Card fullWidth>
                <Stack>
                  <HeadingLevel>
                    <Heading color="dark" id="card">
                      Card Normal
                    </Heading>
                    <Text>
                      dsj ad sadhsa dhsdg asdgsa gdsagd asdgsgd agd
                      sgadsagdsasadsadsadsa dsa dsad sadsah dsahd sakdhashdk.
                    </Text>
                    <List type="greek">
                      <ListItem>Item</ListItem>
                      <ListItem>Item</ListItem>
                      <ListItem>Item</ListItem>
                      <ListItem>Item</ListItem>
                    </List>
                    <Inline>
                      <Label>Label</Label>
                      <Label>Label</Label>
                      <Label>Label</Label>
                      <Label>Label</Label>
                      <Label>Label</Label>
                      <Label>Label</Label>
                      <Hidden below="640px">
                        <Label>Hidden on Mobile</Label>
                      </Hidden>
                      <Hidden above="1280px">
                        <Label>Hidden on Desktop</Label>
                      </Hidden>
                    </Inline>
                    <Stack
                      direction={{
                        default: 'vertical',
                        '640px': 'horizontal',
                      }}
                      justify="end"
                      align={{
                        default: 'start',
                        '640px': 'center',
                      }}
                      wrap
                    >
                      <Button color="highlight" onClick={() => alert('Test')}>
                        <ArrowRight />
                        Button
                      </Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link" url="#card">
                        <ArrowRight />
                        Link
                      </Button>
                    </Stack>
                  </HeadingLevel>
                </Stack>
              </Card>
              <Card color="highlight" fullWidth>
                <Stack>
                  <HeadingLevel>
                    <Heading color="light">Card Highlight</Heading>
                    <Text color="light" truncate={5}>
                      <Link url="#">Lorem</Link> ipsum dolor sit amet,
                      consectetuer adipiscing elit.{' '}
                      <Link
                        variant="normal"
                        url="https://timoclasen.de"
                        external
                      >
                        Aenean commodo
                      </Link>{' '}
                      ligula eget dolor. Aenean massa. Cum sociis natoque
                      penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.{' '}
                      <Link variant="highlight" url="#">
                        Nulla consequat
                      </Link>{' '}
                      massa quis enim. Donec pede justo, fringilla vel, aliquet
                      nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                      imperdiet a, venenatis vitae, justo. Nullam dictum felis
                      eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                      Vivamus elementum semper nisi. Aenean vulputate eleifend
                      tellus.
                    </Text>
                    <List type="number" color="light">
                      <ListItem>Item</ListItem>
                      <ListItem>Item</ListItem>
                      <ListItem>Item</ListItem>
                      <ListItem>Item</ListItem>
                    </List>
                    <Box color="gray1">
                      <ArrowRight />
                      <HiddenVisually>Pfeil nach rechts</HiddenVisually>
                    </Box>
                  </HeadingLevel>
                </Stack>
              </Card>
            </Columns>
          </Stack>
        </Inset>
        <Container width="640px">
          <Inset insetX="2x">
            <Stack>
              <Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
              </Text>
              <Bleed>
                <Box background="indigo9">
                  <Inset insetY="4x">
                    <Text align="center" color="light" weight="bold">
                      I am bleeding!
                    </Text>
                  </Inset>
                </Box>
              </Bleed>
              <Text>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Nam liber tempor cum soluta
                nobis eleifend option congue nihil imperdiet doming id quod
                mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </Text>
              <Box width="full" paddingY="5x">
                <Stack direction="horizontal" align="center">
                  <Box>
                    <Skeleton circle size="64px" />
                  </Box>
                  <Box width="full">
                    <Stack>
                      <HeadingLevel>
                        <Heading level={3}>
                          <Skeleton width="1/3" />
                        </Heading>
                        <Text>
                          <Skeleton count={3} />
                        </Text>
                      </HeadingLevel>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Inset>
        </Container>
      </HeadingLevel>
      <Stack>
        <HeadingLevel>
          <Heading level={1}>Level 1</Heading>
          <HeadingLevel>
            <Heading level={2}>Level 2</Heading>
            <HeadingLevel>
              <Heading level={3}>Level 3</Heading>
              <HeadingLevel>
                <Heading level={4}>Level 4</Heading>
              </HeadingLevel>
            </HeadingLevel>
          </HeadingLevel>
        </HeadingLevel>
      </Stack>
      <Columns space="4x" collapseBelow="640px">
        <Column width="1/3">
          <Box background="indigo5">Column 1 dsadsa dsa sa sad a</Box>
        </Column>
        <Column>
          <Box background="gray5">Column 2</Box>
        </Column>
      </Columns>
    </Container>
  );
}

export default App;
