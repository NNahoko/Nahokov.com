import React from "react";
import Books from "./Bookinfos";
import BookForm from "./CreateBook";
import Home from "./Home";
import { Grommet, Box, Grid, Text } from "grommet";
import { Previous } from "grommet-icons";
import { Link, Route } from "react-router-dom";

function MyBookinfo() {
  return (
    <Grommet>
      <Route exact path="/" component={Home} />
      <Text color="dark-5" style={{ fontSize: 20 }}>
        蔵書管理
      </Text>
      <Grid fill rows={["auto", "medium", "auto"]}>
        <Box
          direction="row"
          align="center"
          margin={{ top: "small", bottom: "medium" }}
        >
          <Text style={{ fontSize: 16 }}>
            データの『登録』『編集』『削除』が出来ます。
          </Text>
          <Box style={{ marginLeft: 360 }}>
            <BookForm />
          </Box>
        </Box>
        <Books />
        <Box direction="row" align="center" margin={{ top: "medium" }}>
          <Previous color="#888888" style={{ width: "20px", height: "15px" }} />
          <Link style={{ textDecoration: "none" }} to="/">
            <Text color="dark-6">Home</Text>
          </Link>
        </Box>
      </Grid>
    </Grommet>
  );
}

export default MyBookinfo;
