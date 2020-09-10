import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_TASK, TASK, CREATE_TASK_ONLY } from "./Query";
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
import { Add, Close } from "grommet-icons";

const CreateTodo = () => {
  const [task, setTask] = useState("");
  const [limit, setLimit] = useState("");

  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: TASK }],
  });

  const [createTaskOnly] = useMutation(CREATE_TASK_ONLY, {
    refetchQueries: [{ query: TASK }],
  });

  const submit = () => {
    limit
      ? createTask({ variables: { task, limit } })
      : createTaskOnly({ variables: { task } });

    setTask("");
    setLimit("");
  };

  return (
    <Grommet>
      <Box fill align="center" justify="center">
        <Button
          plain={false}
          icon={<Add />}
          color="dark-6"
          label="登録"
          onClick={onOpen}
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
                  <Heading level={3} margin="none" color="dark-6">
                    新規
                  </Heading>
                  <Button icon={<Close />} onClick={onClose} />
                </Box>

                <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                  <FormField
                    label="タスク名"
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
                    label="期限（任意）"
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

                <Box flex={false} as="footer" align="end">
                  <Button
                    icon={<Add />}
                    color="dark-6"
                    type="submit"
                    label="登録"
                    onClick={submit}
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
