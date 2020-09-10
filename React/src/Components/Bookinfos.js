import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_BOOKINFO, BOOKINFO } from "./Query";
import EditForm from "./EditBookinfo";
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
} from "grommet";
import { Trash } from "grommet-icons";

export const BookInfos = React.createContext();

const COLUMNS = [
  {
    property: "title",
    label: "書籍名",
    // format: (book) => <strong>{book.title}</strong>,
  },
  {
    property: "author",
    label: "著者名",
  },
  {
    property: "publisher",
    label: "出版社",
  },
];

function Books() {
  const { loading, error, data } = useQuery(BOOKINFO);

  const [deleteBookinfo] = useMutation(DELETE_BOOKINFO, {
    refetchQueries: [{ query: BOOKINFO }],
  });

  const deleteInfo = (id) => {
    deleteBookinfo({ variables: { id } });
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
              {data.bookinfos.map((book) => (
                <TableRow key={book.id}>
                  {COLUMNS.map((c) => (
                    <TableCell
                      margin="small"
                      scope="col"
                      border="bottom"
                      key={c.property}
                      align={c.align}
                    >
                      <Text>
                        {c.format ? c.format(book) : book[c.property]}
                      </Text>
                    </TableCell>
                  ))}
                  <TableCell margin="xxsmall">
                    <Box direction="row">
                      <BookInfos.Provider value={book}>
                        <EditForm />
                      </BookInfos.Provider>

                      <Button
                        plain={false}
                        icon={<Trash size="small" />}
                        color="dark-6"
                        margin="xsmall"
                        size="small"
                        onClick={() => deleteInfo(book.id)}
                      />
                    </Box>
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

export default Books;
