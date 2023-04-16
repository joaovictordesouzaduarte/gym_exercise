import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
    >
      <Typography fontSize="26px" color="#FF2625" fontWeight={600}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { xs: "35px", lg: "40px" } }}
        mt="30px"
        mb="23px"
      >
        Suar, sorrir e repetir
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        mb="23px"
      >
        Confira os exercícios mais eficazes personalizados para você
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "30px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explorar Exercicíos
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
