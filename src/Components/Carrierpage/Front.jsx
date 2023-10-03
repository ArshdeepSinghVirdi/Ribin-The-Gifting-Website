import React from "react";
import {
  TextField,
  FormControl,
  Button,
  Container,
  Typography,
  Box,
  Stack,
  Grid,
} from "@mui/material";

function Front() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [city, setCity] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Stack sx={{ paddingX: "5%", paddingY: "2%" }}>
      <Typography
        sx={{
          color: "#581781",
          fontWeight: "600",
          fontSize: { xs: "32px", sm: "40px", md: "60px" },
          paddingX: "3.2%",
          paddingTop: "0%",
        }}
      >
        Careers at Ribin
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#581781",
          padding: "5%",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "10px" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: { xs: "36px", sm: "48px", md: "48px" },
              marginTop: "-2.8%",
              marginBottom: "1.5%",
            }}
          >
            Kickstart your career at Ribin
          </Typography>
          <Typography
            sx={{
              color: "#EBCCFF",
              fontWeight: "600",
              fontSize: { xs: "20px", sm: "32px", md: "36px" },
            }}
          >
            Where we transform gifting into an amazing experience.<br />
            Our passionate team creates this magic. Be a part of our dream team<br />
            and thrive in a youthful work culture.
          </Typography>
          <Typography
            sx={{
              color: "#F24CBA",
              fontWeight: "600",
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
            }}
          >
            Fill out the form, and our team will contact you shortly
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  First Name
                </Typography>
                <TextField
                  variant="filled"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  Last Name
                </Typography>
                <TextField
                  variant="filled"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  Phone Number
                </Typography>
                <TextField
                  variant="filled"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  Email Address
                </Typography>
                <TextField
                  variant="filled"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  Alternative Phone Number
                </Typography>
                <TextField
                  variant="filled"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  Gender
                </Typography>
                <TextField
                  variant="filled"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  Current City
                </Typography>
                <TextField
                  variant="filled"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  What is your highest level of education?
                </Typography>
                <TextField
                  variant="filled"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth margin="normal">
                <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                  Add Your link to LinkedIn Profile
                </Typography>
                <TextField
                  variant="filled"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  sx={{ background: "white", borderRadius: "20px" }}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              color: "white",
              marginTop: "10px",
            }}
          >
            By submitting this form, you agree to receive email, text, and
            promotional communication from Blueshift related to products and
            services in accordance with Ribin's privacy policy
          </Typography>
          <FormControl fullWidth margin="normal">
            <Button type="submit" variant="contained" sx={{ bgcolor: '#DAA0FF' }}>
              <Typography variant="contained" sx={{ color: "#581781", fontSize: "24px" }}>
                Submit
              </Typography>
            </Button>
          </FormControl>
        </form>
      </Container>
    </Stack>
  );
}

export default Front;
