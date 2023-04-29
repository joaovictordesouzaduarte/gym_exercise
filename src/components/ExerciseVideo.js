import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const ExerciseVideo = ({ exerciseVideo, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}{" "}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {exerciseVideo?.slice(0, 6).map(
          (item, index) =>
            item.video && (
              <a
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="exercise-video"
              >
                <img src={item.video.thumbnails[0].url}></img>
              </a>
            )
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
