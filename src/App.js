import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import AddPost from "./components/AddPost";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <AddPost />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
