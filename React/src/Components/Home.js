import React from "react";
import {
  Grommet,
  Text,
  Box,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableHeader,
} from "grommet";
import { Link, Route } from "react-router-dom";
import MyBookinfo from "./MyBookinfo";
import MyTodolist from "./MyTodolist";

function Home() {
  return (
    <Grommet>
      <Route path="/books" component={MyBookinfo} />
      <Route path="/todo" component={MyTodolist} />

      <Box align="center">
        <Text style={{ fontSize: 15 }} margin="xsmall">
          ご覧いただきありがとうございます。
        </Text>
        <Text style={{ fontSize: 16 }}>
          このサイトは、
          <Text color="neutral-3" style={{ fontSize: 20 }}>
            中島菜穂子
          </Text>
          の
          <Text color="neutral-3" style={{ fontSize: 20 }}>
            ポートフォリオ
          </Text>
          です。
        </Text>
      </Box>

      <Box align="start" justify="center" margin="medium">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope="col">
                <Text style={{ fontSize: 13 }}>利用技術</Text>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell scope="row">
                <Text style={{ fontSize: 15 }}>フロントエンド</Text>
              </TableCell>
              <TableCell border="top">
                <Text style={{ fontSize: 20 }} margin={{ top: "large" }}>
                  React ( Grommet, Apollo Client, Nginx )
                </Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                <Text style={{ fontSize: 15 }}>バックエンド</Text>
              </TableCell>
              <TableCell>
                <Text style={{ fontSize: 20 }}>Ruby on Rails, GraphQL</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                <Text style={{ fontSize: 15 }}>サーバ</Text>
              </TableCell>
              <TableCell>
                <Text style={{ fontSize: 20 }}>AWS EC2 ( Amazon Linux 2 )</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                <Text style={{ fontSize: 15 }}>データベース</Text>
              </TableCell>
              <TableCell>
                <Text style={{ fontSize: 20 }}>AWS RDS ( PostgreSQL )</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontSize: 15 }} scope="row" border="bottom">
                DNS
              </TableCell>
              <TableCell border="bottom">
                <Text style={{ fontSize: 20 }}>AWS Route 53</Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box align="start" justify="center" margin="medium">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>
                <Text style={{ fontSize: 13 }}>サンプルアプリ</Text>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Text style={{ fontSize: 15 }}>Books</Text>
              </TableCell>
              <TableCell border="top">
                <Link to="/books">
                  <Text style={{ fontSize: 17, color: "#777777" }}>
                    蔵書管理
                  </Text>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell border="bottom">
                <Text style={{ fontSize: 15 }}>Todo</Text>
              </TableCell>
              <TableCell border="bottom">
                <Link to="/todo">
                  <Text style={{ fontSize: 17, color: "#777777" }}>
                    Todoリスト
                  </Text>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Grommet>
  );
}

export default Home;

//I want to try my hand at learning various things.
