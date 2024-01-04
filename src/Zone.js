import { Box, Button, Grid, ImageList, Paper, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import CircleIcon from "@mui/icons-material/Circle";
import SettingsIcon from "@mui/icons-material/Settings";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.error,
}));

// const ImgBox = styled.img`
//   border: 1px solid red;
//   width: 100%;
// `;

export default function Zone() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={6}>
          <Item elevation={0} sx={{ display: "flex", padding: "30px" }}>
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
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "30px",
            }}
            elevation={0}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                fontFamily:
                  "'__Public_Sans_f258fb','__Public_Sans_Fallback_f258fb',Helvetica,Arial,sans-serif",
                fontWeight: "600",
                // color: "gray",
                gap: "5px",
              }}
            >
              <SettingsIcon sx={{ fontSize: "20px" }} /> Need help ?
            </Typography>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Item
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                fontFamily:
                  "'__Public_Sans_f258fb','__Public_Sans_Fallback_f258fb',Helvetica,Arial,sans-serif",
              }}
            >
              Page Not Found!
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                width: "50%",
                color: "#637381",
                fontWeight: "500",
                fontFamily: "sans-serif",
                fontSize: "15px",
              }}
            >
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>

            <ImageList
              sx={{
                // width: 600,
                // height: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              cols={8}
              rowHeight={164}
            >
              <img
                src={
                  "https://zone-ui.vercel.app/assets/illustrations/illustration_404.svg"
                }
                alt={"asdsad"}
                loading="lazy"
              />
            </ImageList>

            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                background: "#212B36",
                ":hover": { background: "gray" },
              }}
            >
              Go to Home
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
