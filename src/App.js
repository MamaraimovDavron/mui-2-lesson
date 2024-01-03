import React from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import Zone from "./Zone";



const App = () => {
  return (
    <Box>
      <CssBaseline>
        {/* <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Femmecubator
              </Typography>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Button color="inherit">LISTINGS</Button>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Button color="inherit">MENTORS</Button>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Button color="inherit">MY ACCOUNT</Button>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Button color="inherit">LOG OUT</Button>
                </Typography>
              </Toolbar>
            </Toolbar>
          </AppBar>
        </Box> */}
        {/* <Navbar /> */}
        <Zone />
      </CssBaseline>
    </Box>
  );
};

export default App;
