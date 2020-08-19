import React from "react";
import { Grommet, Main, Text, Image, Box } from "grommet";
import image from "./image/IMG_9079.jpg";

function Home() {
  return (
    <Grommet>
      <Main>
        <Text size="large">Welcome to Nahokov.com!</Text>
        <Text>I want to try my hand at learning various things.</Text>
      </Main>
      <Box height="medium" width="large">
        <Image fit="cover" src={image} />
      </Box>
    </Grommet>
  );
}

export default Home;
