import React from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./Todolist";
import Home from "./Home";
import { Grommet, Box, Grid, Text } from "grommet";
import { Previous } from "grommet-icons";
import { Link, Route } from "react-router-dom";

function MyTodolist() {
  return (
    <Grommet>
      <Route exact path="/" component={Home} />
      <Text color="dark-5" style={{ fontSize: 20 }}>
        Todoリスト
      </Text>

      <Grid fill rows={["auto", "flex", "auto"]}>
        <Box
          align="center"
          width="large"
          direction="row"
          margin={{ top: "small", bottom: "medium" }}
        >
          <Text style={{ fontSize: 16 }}>
            データの『登録』『選択』『一括削除』が出来ます。
          </Text>
          <Box style={{ marginLeft: 78 }}>
            <CreateTodo />
          </Box>
        </Box>
        <TodoList />
      </Grid>
      <Box direction="row" align="center" pad="xsmall">
        <Previous color="#888888" style={{ width: "20px", height: "15px" }} />
        <Link style={{ textDecoration: "none" }} to="/">
          <Text color="dark-6">Home</Text>
        </Link>
      </Box>
    </Grommet>
  );
}

export default MyTodolist;
