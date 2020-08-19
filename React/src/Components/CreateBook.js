import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOOKINFO, BOOKINFO } from "./Query";

import {
  Box,
  Button,
  Grommet,
  FormField,
  Heading,
  Layer,
  TextInput,
  Form,
} from "grommet";
import { Add, Close } from "grommet-icons";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  const [createBookinfo] = useMutation(CREATE_BOOKINFO, {
    refetchQueries: [{ query: BOOKINFO }],
  });

  const submit = () => {
    createBookinfo({ variables: { title, author, publisher } });

    setTitle("");
    setAuthor("");
    setPublisher("");
  };

  return (
    <Grommet>
      <Box fill align="center" justify="center">
        <Button
          icon={<Add />}
          color="#3D138D"
          label="Add"
          onClick={onOpen}
          margin={{ top: "large" }}
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
                    AddBookinfo
                  </Heading>
                  <Button icon={<Close />} onClick={onClose} />
                </Box>
                <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                  <FormField
                    label="Title"
                    name="title"
                    margin={("small", { bottom: "small" })}
                  >
                    <TextInput
                      name="title"
                      type="title"
                      value={title}
                      onChange={({ target }) => setTitle(target.value)}
                    />
                  </FormField>

                  <FormField
                    label="Author"
                    name="author"
                    margin={("small", { bottom: "small" })}
                  >
                    <TextInput
                      name="author"
                      type="author"
                      value={author}
                      onChange={({ target }) => setAuthor(target.value)}
                    />
                  </FormField>

                  <FormField
                    label="Publisher"
                    name="publisher"
                    margin={("small", { bottom: "small" })}
                  >
                    <TextInput
                      name="publisher"
                      type="publisher"
                      value={publisher}
                      onChange={({ target }) => setPublisher(target.value)}
                    />
                  </FormField>

                  <Box
                    direction="row"
                    justify="between"
                    margin={{ top: "small" }}
                  ></Box>
                </Box>
                <Box flex={false} as="footer" align="start">
                  <Button
                    icon={<Add size="small" />}
                    type="submit"
                    label="Add"
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
export default BookForm;
