import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="body1">Home</Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="body1">About</Typography>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="body1">Contact</Typography>
          </Link>
        </Stack>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
