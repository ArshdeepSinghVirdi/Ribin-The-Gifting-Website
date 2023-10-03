import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";

function Refund() {
  // Use the useMediaQuery hook to check the screen size
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box paddingX={isSmallScreen ? 2 : 5} paddingTop={isSmallScreen ? 10 : 2}>
        <Typography
          sx={{
            color: "#581781",
            fontWeight: "700",
            fontSize: { xs: "30px", md: "60px" }, // Adjust font size for xs and md screens
            paddingX: "3.2%",
            paddingTop: "0%",
            paddingBottom: "1.7%",
            textAlign: "center",
          }}
        >
          Refund policy
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "14px", md: "20px" }, // Adjust font size for xs and md screens
            paddingX: "3.2%",
            paddingTop: "1%",
          }}
        >
          This Policy governs the cancellation and refund policy adopted by
          RIBIN (“Portal”) with respect to the subscriptions to our Portal and
          purchase of gift cards.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "14px", md: "20px" }, // Adjust font size for xs and md screens
            paddingX: "3.2%",
            paddingTop: "1.5%",
          }}
        >
          The Portal is a service provided by CloserTech Private Limited
          (“Company”).
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "14px", md: "20px" }, // Adjust font size for xs and md screens
            paddingX: "3.2%",
            paddingTop: "1.5%",
          }}
        >
          The terms ‘we’, ‘our(s)’ or ‘us’ wherever used hereinafter shall refer
          to the Company and the Portal; and the terms ‘you’, ‘yours’ etc. shall
          refer to the end-users of the Portal who subscribe to it and utilize
          it to purchase gift cards.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "14px", md: "20px" }, // Adjust font size for xs and md screens
            paddingX: "3.2%",
            paddingTop: "1.8%",
            // fontWeight: "bold",
          }}
        >
          Refund for purchase of gift card:
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "14px", md: "20px" }, // Adjust font size for xs and md screens
            paddingX: "3.2%",
            paddingTop: "1.8%",
          }}
        >
          In the event that you wish to return a gift card that has been
          purchased from the Portal, a full refund for the amount paid towards
          such gift card will be made to you only until the gift card is
          unclaimed by the receiving party/individual.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "14px", md: "20px" }, // Adjust font size for xs and md screens
            paddingX: "3.2%",
            paddingTop: "1.8%",
            paddingBottom: isSmallScreen ? "2%" : "3.4%", // Adjust padding for small screens
          }}
        >
          This refund shall be made towards the primary source of payment used
          at the time of purchase.
        </Typography>
      </Box>
    </>
  );
}

export default Refund;
