import React from "react";
import { Link, Route } from "react-router-dom";
import { Grommet, Box, Text } from "grommet";
import MyBookinfo from "./MyBookinfo";
import Home from "./Home";
import MyTodolist from "./MyTodolist";

export function Navbar() {
  return (
    <Grommet>
      <Box gap="small">
        <Text margin="none">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
        </Text>
        <Text margin="none">
          <Link style={{ textDecoration: "none", color: "white" }} to="/books">
            Books
          </Link>
        </Text>
        <Text margin="none">
          <Link style={{ textDecoration: "none", color: "white" }} to="/todo">
            Todo
          </Link>
        </Text>
      </Box>
    </Grommet>
  );
}

export function MainContents() {
  return (
    <Grommet>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={MyBookinfo} />
      <Route path="/todo" component={MyTodolist} />
    </Grommet>
  );
}
