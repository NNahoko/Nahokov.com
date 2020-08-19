import React from "react";

import Books from "./Bookinfos";
import BookForm from "./CreateBook";
import { Grommet, Heading, Box, Grid } from "grommet";

function MyBookinfo() {
  return (
    <Grommet>
      <Grid fill rows={["auto", "medium", "auto"]}>
        <Box align="center" tag="header" pad="medium" color="#00739D">
          <Heading margin="none" color="#00739D" size="small">
            My BookInfo
          </Heading>
        </Box>

        <Books />
        <BookForm />
      </Grid>
    </Grommet>
  );
}

export default MyBookinfo;
