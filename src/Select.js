import * as React from "react";
import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = function (event: SelectChangeEvent) {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 0, border: "none", outline: "none" }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          onChange={handleChange}
          sx={{ border: "none", outline: "none" }}
        >
          <MenuItem>My Account</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
