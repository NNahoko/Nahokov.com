import React, { useState, useEffect } from "react";
import { TASK, DELETE_TASK } from "./Query";
import { useQuery, useMutation } from "@apollo/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  Grommet,
  Button,
  Box,
  CheckBox,
} from "grommet";
import { Checkmark } from "grommet-icons";

const COLUMNS = [
  {
    property: "task",
    label: "タスク名",
    //format: (task) => <strong>{task.task}</strong>,
  },
  {
    property: "limit",
    label: "期限",
  },
];

function TodoList() {
  const { loading, error, data } = useQuery(TASK);

  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: TASK }],
  });

  const deleteTasks = (id) => {
    deleteTask({ variables: { id } });
  };

  const [checkedTasks, setCheckedTasks] = useState({});
  const [isBtnHide, setIsBtnHide] = useState(true);

  useEffect(() => {
    Object.keys(checkedTasks).length && setIsBtnHide(false);

    if (
      Object.values(checkedTasks).every((checkedtask) => {
        return checkedtask === false;
      })
    ) {
      setIsBtnHide(true);
    }
  }, [checkedTasks]);

  const handleChange = (e) => {
    setCheckedTasks({
      ...checkedTasks,
      [e.target.id]: e.target.checked,
    });
  };

  const deletetask = () => {
    const dataPushArray = Object.entries(checkedTasks);

    console.log(checkedTasks);

    const deleteArray = dataPushArray.filter((item) => item[1] === true);

    console.log(deleteArray);
    deleteArray.forEach((item) => {
      deleteTasks(item[0]);
    });

    setCheckedTasks({});
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grommet>
      <Box fill align="center" justify="center">
        <Box
          overflow={{ vertical: "scroll", horizontal: "auto" }}
          height="medium"
        >
          <Box align="end" style={{ marginBottom: 15 }}>
            {!isBtnHide && (
              <Button
                plain={false}
                icon={<Checkmark size="medium" />}
                color="dark-6"
                label="削除"
                margin="xsmall"
                onClick={deletetask}
              />
            )}
          </Box>
          <Table sortable="true">
            <TableHeader>
              <TableRow>
                {COLUMNS.map((c) => (
                  <TableCell
                    margin={{ left: "small" }}
                    key={c.property}
                    scope="col"
                    border="bottom"
                  >
                    <Text>
                      <strong>{c.label}</strong>
                    </Text>
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.tasks.map((task) => (
                <TableRow key={task.id}>
                  {COLUMNS.map((c) => (
                    <TableCell
                      margin="small"
                      scope="col"
                      border="bottom"
                      key={c.property}
                      align={c.align}
                    >
                      <Text>
                        {c.format ? c.format(task) : task[c.property]}
                      </Text>
                    </TableCell>
                  ))}
                  <TableCell>
                    <CheckBox id={task.id} onChange={handleChange} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Grommet>
  );
}

export default TodoList;
