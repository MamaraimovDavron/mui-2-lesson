import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CircleIcon from "@mui/icons-material/Circle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Zone() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item sx={{ display: "flex", padding: "30px" }}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: "black",
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              ZONE
              <CircleIcon
                sx={{ fontSize: "10px", marginLeft: "2px" }}
                color="error"
              />
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ display: "flex", padding: "30px" }}></Item>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
}
