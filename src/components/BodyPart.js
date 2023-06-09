import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = [
  importAll(require.context("../assets/icons", false, /\.(png|jpe?g|svg)$/)),
];
const getImage = (imageName) => {
  let image = images.map(
    (image) =>
      image[`${imageName.split(" ")[0]}.png`] ||
      image[`${imageName.split(" ")[1]}.png`]
  );
  return image;
};
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  let iconUrl = getImage(item);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={iconUrl[0] ? iconUrl : Icon}
        alt="dumbbell"
        style={{ width: "50px", height: "50px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
