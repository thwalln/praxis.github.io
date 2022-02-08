import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      Webdesign by{" "}
      <Link color="inherit" href="https://mui.com/">
        Thomas Wallner
      </Link>
      {"."}
    </Typography>
  );
};

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "92vh",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container
          maxWidth="sm"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="body1">
              © {new Date().getFullYear()} Dr. med. Irene Wallner und Dr. med.
              Florian Gesele
            </Typography>
            <Copyright />
          </div>
          <div>
            <Button variant="text">Impressum</Button>
            <Button variant="text">Datenschutz</Button>
          </div>
        </Container>
      </Box>
    </Box>
  );
}
