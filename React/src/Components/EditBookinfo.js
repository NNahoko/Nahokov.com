import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_BOOKINFO, BOOKINFO } from "./Query";
import { BookInfos } from "./Bookinfos";
import { Close, Edit } from "grommet-icons";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Heading,
  Layer,
  TextInput,
} from "grommet";

const EditForm = () => {
  const [open, setOpen] = useState(false);
  const book = useContext(BookInfos);
  const [id, setId] = useState(book.id);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [publisher, setPublisher] = useState(book.publisher);
  const [updateBookinfo] = useMutation(EDIT_BOOKINFO, {
    refetchQueries: [{ query: BOOKINFO }],
  });

  const send = () => {
    setId(book.id);
    updateBookinfo({ variables: { id, title, author, publisher } });
    setId("");
    setTitle("");
    setAuthor("");
    setPublisher("");
  };

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <Grommet>
      <Box fill align="center" justify="center">
        <Button
          plain={false}
          icon={<Edit size="small" />}
          color="#3D138D"
          size="small"
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
                  <Heading level={2} margin="none">
                    EditBookinfo
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
                    icon={<Edit size="small" />}
                    type="submit"
                    label="Edit"
                    onClick={send}
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
export default EditForm;