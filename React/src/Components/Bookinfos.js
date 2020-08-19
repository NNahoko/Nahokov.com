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
    label: "Title",
    format: (book) => <strong>{book.title}</strong>,
  },
  {
    property: "author",
    label: "Author",
  },
  {
    property: "publisher",
    label: "Publisher",
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
                    key={c.property}
                    scope="col"
                    border="bottom"
                    align={c.align}
                  >
                    <Text>{c.label}</Text>
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
                  <TableCell>
                    <Button
                      plain={false}
                      icon={<Trash size="small" />}
                      color="#3D138D"
                      margin="small"
                      onClick={() => deleteInfo(book.id)}
                    />
                    <BookInfos.Provider value={book}>
                      <EditForm />
                    </BookInfos.Provider>
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
