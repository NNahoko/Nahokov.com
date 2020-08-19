import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK, TASK } from "./Query";

import { Add, Close } from "grommet-icons";

import {
  Box,
  Button,
  FormField,
  Grommet,
  Heading,
  Layer,
  TextInput,
  Form,
} from "grommet";

const CreateTodo = () => {
  const [task, setTask] = useState("");
  const [limit, setLimit] = useState("");

  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: TASK }],
  });

  const submit = () => {
    createTask({ variables: { task, limit, completed: false } });
    setTask("");
    setLimit("");
  };

  return (
    <Grommet>
      <Box fill align="center" justify="center">
        <Button
          icon={<Add />}
          label="Add"
          onClick={onOpen}
          margin={{ top: "medium" }}
        />
        <Form>
          {open && (
            <Layer
              position="center"
              modal
              onClickOutside={onClose}
              onEsc={onClose}
            >
              <Box
                as="form"
                fill="vertical"
                overflow="auto"
                width="medium"
                pad="medium"
                onSubmit={onClose}
              >
                <Box flex={false} direction="row" justify="between">
                  <Heading level={2} margin="none">
                    Add Todo
                  </Heading>
                  <Button icon={<Close />} onClick={onClose} />
                </Box>

                <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                  <FormField
                    label="Task"
                    name="task"
                    margin={("small", { bottom: "small" })}
                  >
                    <TextInput
                      name="task"
                      type="task"
                      value={task}
                      onChange={({ target }) => setTask(target.value)}
                    />
                  </FormField>
                  <FormField
                    label="Limit"
                    name="limit"
                    margin={("small", { bottom: "small" })}
                  >
                    <TextInput
                      name="limit"
                      type="limit"
                      value={limit}
                      placeholder="yyyymmdd"
                      onChange={({ target }) => setLimit(target.value)}
                    />
                  </FormField>
                </Box>

                <Box flex={false} as="footer" align="start">
                  <Button
                    type="submit"
                    label="Submit"
                    onClick={submit}
                    primary
                  />
                </Box>
              </Box>
            </Layer>
          )}
        </Form>
      </Box>
    </Grommet>
  );
};

export default CreateTodo;
