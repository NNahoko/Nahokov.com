import React from "react";
import CreateTodo from "./CreateTodo";
import TodoList2 from "./Todolist_2";
import { Grommet, Heading, Box, Grid } from "grommet";

function MyTodolist() {
  return (
    <Grommet>
      <Grid fill rows={["auto", "flex", "auto"]}>
        <Box
          align="center"
          tag="header"
          pad="medium"
          color="#00739D"
          width="large"
        >
          <Heading margin="none" color="#00739D" size="small">
            My TodoList
          </Heading>
        </Box>

        <TodoList2 />
        <CreateTodo />
      </Grid>
    </Grommet>
  );
}

export default MyTodolist;
