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
  TextareaAutosize,
} from "@mui/material";

const Benefit = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [employee, setEmployee] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [companyDescription, setCompanyDescription] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Stack sx={{ paddingX: '5%', paddingY: '2%', mt: { xs: '5rem', md: '1rem' } }}>
      <Stack direction='column' alignItems='center' justifyContent='center'>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: { xs: '32px', sm: '40px', md: '60px' },
            color: '#581781',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Looking For Employee Benefits Solutions?
        </Typography>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: { xs: '16px', sm: '24px', md: '32px' },
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Meet Ribin, a promising solution for Employee Benefits, crafted to cater to the needs of both HR professionals and employees.<br /><br />

          Ribin's Employee Incentive and Pay Solution leverages state-of-the-art technology and expertise to simplify the management of a wide range of Employee Benefits. These benefits encompass Meal, Clothing, Fitness, Rewards, and more, and also extend to modern offerings such as Wellness, Entertainment, and Gadgets. All of this is conveniently accessible through a single gift card and an advanced mobile app.
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
                fontSize: { xs: '32px', sm: '40px', md: '48px' },
                marginTop: "-2.8%",
                marginBottom: "1.5%",
              }}
            >
              Contact Us
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
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                    Tell us something about your company
                  </Typography>
                  <TextField
                    variant="filled"
                    multiline
                    rows={4}
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                    sx={{ background: "white", borderRadius: "20px" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth margin="normal">
                  <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                    Company Name
                  </Typography>
                  <TextField
                    variant="filled"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    sx={{ background: "white", borderRadius: "20px" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth margin="normal">
                  <Typography variant="h6" sx={{ color: "#DAA0FF", fontSize: "20px" }}>
                    Employee Count
                  </Typography>
                  <TextField
                    variant="filled"
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                    sx={{ background: "white", borderRadius: "20px" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth margin="normal">
              <Button type="submit" variant="contained" sx={{ bgcolor: '#DAA0FF', mt: '20px' }}>
                <Typography variant="contained" sx={{ color: "#581781", fontSize: "24px" }}>
                  Submit
                </Typography>
              </Button>
            </FormControl>
          </form>
        </Container>
      </Stack>
    </Stack>
  );
}

export default Benefit;
