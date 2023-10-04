import React from "react";
import { Typography, Box, Stack } from "@mui/material";

function TermsAndConditions() {
  return (
    <Stack sx={{ paddingX: '5%', paddingY: '2%', mt: { xs: '5rem', md: '1rem' } }}>
      <Typography
        sx={{
          color: "#581781",
          fontWeight: "700",
          fontSize: { xs: "35px", md: "60px", sm: "40px" },
          paddingX: "3.2%",
          paddingTop: "1%",
          paddingBottom: "1.5%",
          textAlign: "center",
        }}
      >
        Terms and Conditions & Disclaimer
      </Typography>
      <Box paddingTop={2}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "700",
            fontSize: { xs: "20px", md: "32px" },
            paddingX: "3.2%",
            paddingTop: "0%",
          }}
        >
          1. Introduction
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "15px", md: "20px" },
            paddingX: "3.2%",
            paddingTop: "1%",
            textAlign: "justify",
          }}
        >
          <ul>
            <li>
              Thanks for using the Ribin Platform. We are a service provided by
              CloserTech Private Limited (“We” or “Us”). The use of the Platform
              to purchase Gift Cards pertaining to the products and services of
              other Businesses (hereinafter referred to as ‘Service’) is subject
              to these terms of Service.
            </li>
          </ul>
        </Typography>
      </Box>
      <Box paddingTop={2}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "700",
            fontSize: { xs: "20px", md: "32px" },
            paddingX: "3.2%",
            paddingTop: "0%",
          }}
        >
          2. Use of the Gift Card
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "15px", md: "20px" },
            paddingX: "3.2%",
            paddingTop: "1%",
            textAlign: "justify",
          }}
        >
          <ul>
            <li>
              Once the user receives a gift card, it will be added to their
              account within the app. They can pay by simply clicking on a
              specific gift card present in their account/cart.
            </li>
            <li>No Pin or password needed to redeem.</li>
            <li>
              The Gift Card shall be specifically purchased for the products or
              services offered by a particular Businesses, as per your
              preference. A Gift Card pertaining to a particular Business cannot
              be used in another Business, irrespective of whether the price of
              the desired product/service is the same, or whether the nature of
              the product/service is the same. d) The Gift Card shall display the
              expiry date for it, and this date must be strictly adhered to. The
              Gift Card shall be invalidated subsequent to this date, and no
              refund will be provided to you in such scenario.
            </li>
            <li>
              In the event that the price of the product/service desired is
              above the price limit of the Gift Card, the same shall have to be
              adjusted and paid directly to the Business. We will not offer any
              instantaneous top-up to the Gift Card in such cases.
            </li>
            <li>
              In the event that the price of the product/service desired is not
              fully utilizing the price limit for the Gift Card, the same can be
              further utilized at the Business for another product/service
              fitting within the remainder price.
            </li>
          </ul>
        </Typography>
      </Box>
      <Box paddingTop={2}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "700",
            fontSize: { xs: "20px", md: "32px" },
            paddingX: "3.2%",
            paddingTop: "0%",
          }}
        >
          3. Liability of Ribin
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "15px", md: "20px" },
            paddingX: "3.2%",
            paddingTop: "1%",
            textAlign: "justify",
          }}
        >
          <ul>
            <li>
              It is hereby expressly clarified that we merely serve as an
              intermediary between you and the Business. The availability of a
              Gift Card for a particular Business shall not be construed by you
              as any endorsement or advertising of the particular Business being
              done from our side.
            </li>
            <li>
              Our liability is limited strictly to the extent of making
              available the Gift Card to you. We are not responsible or liable
              in any manner for the quality of product/service availed using the
              Gift Card. We shall not entertain any claims of inadequacy in
              service or defect in product, and the same must be taken up by you
              with the Business directly.
            </li>
            <li>
              We will not be liable in the event that the Business changes the
              pricing of their products/services, which renders the Card
              unusable for the desired product/service as per the earlier
              pricing model.
            </li>
            <li>
              In the event that the Gift card is misplaced by you, or is
              misplaced by the intended user to whom such Card is given, we
              shall bear no responsibility towards the same. We shall not issue
              any refund in case of such misplaced Cards.
            </li>
            <li>
              The Service being provided by the Platform is for the bona fide
              purpose of creating Gift Cards for products/services of various
              Businesses. Any use of the Service or Gift Card by you, or by the
              intended user to whom such Card is given which does not align with
              the purpose desired to be carried out by us shall be done strictly
              at the liability of you or the subsequent intended user. We shall
              bear no liability towards any usage of the Service or Gift Card
              which is not in compliance with the outcome desired by us.
            </li>
          </ul>
        </Typography>
      </Box>

      <Box paddingTop={2}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "700",
            fontSize: { xs: "20px", md: "32px" },
            paddingX: "3.2%",
            paddingTop: "0%",
          }}
        >
          4. Dispute Resolution
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "15px", md: "20px" },
            paddingX: "3.2%",
            paddingTop: "1%",
            textAlign: "justify",
          }}
        >
          <ul>
            <li>
              You hereby agree that any dispute or claim arising from or
              relating to the Terms shall be finally settled by arbitration,
              using the English language, administered by THE ARBITRATION AND
              CONCILIATION ACT, 1996. Our arbitration will be handled by a sole
              arbitrator in accordance with those rules. Judgment on the
              arbitration award may be entered in any court that has
              jurisdiction. Any arbitration under the Terms will take place on
              an individual basis: class arbitrations and class actions are not
              permitted. The seat and venue of jurisdiction shall be at Pune.
            </li>
            <li>
              If any provision of this document is deemed invalid by a court of
              competent jurisdiction, the invalidity of such provision shall
              not affect the validity of the remaining provisions thereof, which
              shall remain in full force and effect. The Platform’s failure to
              insist upon or enforce strict performance of any provision of
              these Terms of Service or any of the other Governing Documents
              shall not be construed as a waiver of any provision or right.
              Neither the course of conduct between the parties nor trade
              practice shall act to modify any provision of these Terms of
              Service. The Platform may assign its rights and duties under these
              Terms of Service or any of the other Governing Documents to any
              party at any time without notice to you.
            </li>
            <li>
              Any rights of the Platform or us not expressly granted herein are
              reserved.
            </li>
          </ul>
        </Typography>
      </Box>
      <Box paddingTop={2} paddingBottom={6}>
        <Typography
          sx={{
            color: "#581781",
            fontWeight: "700",
            fontSize: { xs: "45px", md: "64px" },
            paddingX: "3.2%",
            paddingTop: "1%",
            paddingBottom: "1.5%",
            textAlign: "center",
          }}
        >
          Disclaimer Policy
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "500",
            fontSize: { xs: "15px", md: "20px" },
            paddingX: "3.2%",
            paddingTop: "1%",
            textAlign: "justify",
          }}
        >
          Information given on the Platform is for general information purpose
          only. We don’t make representation or warranty of any kind. Content is
          not intended to mislead or offend any person. Ribin Platform shall not
          be liable for any loss or any other injury caused to you through the
          usage of the Platform, the Services offered therein or the Gift Cards.
          You must acquaint yourself with the Privacy Policy of the Platform,
          and conduct your activities on the Platform in accordance with the
          same. We shall not be held responsible or liable in any manner or
          extent for use of the Platform which is not in accordance with this
          Terms of Service and the Privacy Policy.
        </Typography>
      </Box>
    </Stack>
  );
}

export default TermsAndConditions;
