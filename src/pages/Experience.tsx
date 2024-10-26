import { Box, Container, Typography, Divider } from "@mui/material";
import it from "../assets/images/experience_IT.png";
import experience2 from "../assets/images/experience_2.png";
import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import CustomNavbar from "../components/CustomNavbar.tsx";
import Background from "../components/Background.tsx";
import Grid from "@mui/material/Grid2";

function Experience() {
  return (
    <Box>
      <CustomNavbar />
      <Container>
        <Box sx={{ py: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Experience
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                component="img"
                src={it}
                sx={{
                  width: "100%",
                  mb: 1.5,
                  display: "block",
                }}
                alt="Picture of me at the RDKB"
                title="Picture of me at the RDKB"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <MarkdownToHTML src="src/assets/content/experience/ExperienceIT.md" />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 9 }}>
              <MarkdownToHTML src="src/assets/content/experience/ExperienceVolunteering.md" />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                component="img"
                src={experience2}
                sx={{
                  width: "100%",
                  mb: 1.5,
                  display: "block",
                }}
                alt="Picture of the Interior Health"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Background />
    </Box>
  );
}

export default Experience;