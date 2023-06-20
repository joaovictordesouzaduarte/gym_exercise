import React from "react";
import Logo from "../assets/images/Logo-1.png";
import { Box, Stack, Typography } from "@mui/material";
function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Criado por João Victor de Souza Duarte
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
