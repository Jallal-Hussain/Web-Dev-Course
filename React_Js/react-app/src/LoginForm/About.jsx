import React from "react";
// import the MUI need
import { Grid, Typography, Button, Box, Avatar, CardContent, CardHeader, Chip, Rating, Divider } from "@mui/material";
// import the mui material components you need
import {  } from "@mui/material";

export default function About() {
  return (
    <React.Fragment>
      <Grid container spacing={10} marginTop={2}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h3">About me</Typography>
        </Grid>
        <Grid item xs={12} md={6} marginLeft={2} marginRight={2}>
          <Typography variant="h4">Information About me</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            labore nihil obcaecati consequatur. Debitis error doloremque, vero
            eos vel nemo eius voluptatem dicta tenetur modi musica delectus
            dolore fugiat exercitationem a, ipsum quidem quo enim natus
            accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Harum non necessitatibus deleniti eum
            soluta.. <br /> <br /> La musica delectus dolore fugiat
            exercitationem a, ipsum quidem quo enim natus accusamus labore
            dolores nam. Unde. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Harum non necessitatibus deleniti eum soluta.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" href="#">
              Download CV
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} marginLeft={2} marginRight={2} marginTop={2}>
        <Divider sx={{bgcolor:"grey.300"}}/>
          <Typography variant="h4">My Skills</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">html5</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  80%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "80%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">css3</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  95%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "95%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">javascript</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  75%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "75%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body1">ReactJS</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  50%
                </Typography>
                <Box sx={{ width: "100%", height: 10, bgcolor: "grey.300" }}>
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      bgcolor: "primary.main",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            {/* add more skill items here */}
          </Grid>
        </Grid>
        <Grid item xs={12} marginLeft={2} marginRight={2} marginTop={2}>
        <Divider sx={{bgcolor:"grey.300"}}/>
          <Typography variant="h4">My Projects</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "secondary.main" }}
                    aria-label="project"
                  >
                    J
                  </Avatar>
                }
                title="Login Form"
                subheader="February 17, 2024"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This is a sample project that I created using React and MUI.
                  It has some cool features and a nice design.
                </Typography>
                <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                  <Chip label="React" variant="outlined" sx={{ mr: 1 }} />
                  <Chip label="MUI" variant="outlined" sx={{ mr: 1 }} />
                  <Chip label="HTML" variant="outlined" sx={{ mr: 1 }} />
                  <Chip label="CSS" variant="outlined" sx={{ mr: 1 }} />
                  <Rating name="project-rating" value={4} readOnly />
                </Box>
              </CardContent>
            </Grid>
            {/* add more project items here */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
