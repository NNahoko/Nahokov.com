import React, { useState } from "react";
import { Grommet, Box, Button, Grid, Text, Avatar, Footer } from "grommet";
import { grommet } from "grommet/themes";
import { Attraction } from "grommet-icons";
import image from "./image/IMG_8064.jpg";

import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, MainContents } from "./Router";

const MyDashboard = () => {
  const [sidebar, setSidebar] = useState(true);

  /*
  const SidebarHeader = () => (
    <Box align="center" gap="small" direction="row" margin="xsmall">
      <Avatar src={image} />
    </Box>
  );
  */
  return (
    <Grommet full theme={grommet}>
      <Grid
        fill
        rows={["auto", "flex"]}
        columns={["auto", "flex"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "sidebar", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "small" }}
          background="#00739D"
        >
          <Button onClick={() => setSidebar(!sidebar)}>
            <Text size="xlarge">
              Nahokov.com <Attraction />
            </Text>
          </Button>
          <Avatar size="medium" src={image} round="large" />
        </Box>
        <Router>
          {sidebar && (
            <Box
              gridArea="sidebar"
              background="dark-4"
              width="small"
              animation={[
                { type: "fadeIn", duration: 300 },
                { type: "slideRight", size: "xlarge", duration: 150 },
              ]}
            >
              <Box pad={{ horizontal: "medium", vertical: "small" }}>
                <Navbar />
              </Box>
            </Box>
          )}

          <Box gridArea="main" justify="center" align="center">
            <MainContents />
          </Box>
        </Router>
      </Grid>
      <Footer background="neutral-3" justify="center" pad="small">
        <Text textAlign="center" size="small">
          © 2020 Copyright Nahokov
        </Text>
      </Footer>
    </Grommet>
  );
};
export default MyDashboard;

/*
{["First", "Second", "Third"].map(name => (
              <Button key={name} href="" hoverIndicator>
                <Box pad={{ horizontal: "medium", vertical: "small" }}>
                <Text>{name}</Text>
                </Box>
              </Button>
            ))}
 */
