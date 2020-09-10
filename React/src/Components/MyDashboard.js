import React, { useState } from "react";
import { Grommet, Box, Button, Grid, Text, Footer, Anchor } from "grommet";
import { grommet } from "grommet/themes";
import { Attraction, Github } from "grommet-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, MainContents } from "./Router";

const MyDashboard = () => {
  const [sidebar, setSidebar] = useState(true);

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
              Nakajima's Portfolio
              <Attraction />
            </Text>
          </Button>
          <Box direction="row" align="center" pad="xsmall">
            <Anchor color="white" href="https://github.com/NNahoko">
              <Github style={{ width: "40px", height: "40px" }} />
            </Anchor>
          </Box>
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
          © 2020 Copyright Nahoko Nakajima
        </Text>
      </Footer>
    </Grommet>
  );
};
export default MyDashboard;
