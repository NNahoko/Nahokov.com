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
        <Button icon={<Add />} label="登録" color="dark-6" onClick={onOpen} />
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
                    label="書籍名"
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
                    label="著者名"
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
                    label="出版社"
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
                <Box flex={false} as="footer" align="end">
                  <Button
                    icon={<Add size="small" />}
                    type="submit"
                    label="登録"
                    color="dark-6"
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
export default BookForm;
