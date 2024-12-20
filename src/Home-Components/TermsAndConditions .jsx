import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/material";


const TermsAndConditions = () => {
    const terms = [
        {
          title: "General",
          content: `By registering for the Green Marathon, you agree to these Terms and Conditions. 
                    The event is organized by Vagarai Youth Wings and will take place on 15.01.2024 at Vagarai.`,
        },
        {
          title: "Registration",
          content: `All participants must register online. 
                    Registration fees are non-refundable and non-transferable. 
                    Ensure all provided information is accurate.`,
        },
        {
          title: "Event Rules",
          content: `Follow the designated race route and instructions from officials. 
                    Wear your bib number visibly at all times. 
                    Unauthorized vehicles or equipment are prohibited.`,
        },
        {
          title: "Health and Safety",
          content: `Ensure you are fit to participate. 
                    Medical assistance will be available on-site. 
                    Inform officials immediately if you feel unwell.`,
        },
        {
          title: "Liability",
          content: `Participation is at your own risk. 
                    The organizers are not liable for injuries, damages, or losses. 
                    It is recommended to have appropriate insurance.`,
        },
        {
          title: "Cancellation or Changes",
          content: `The organizers may postpone the event due to unforeseen circumstances (e.g., extreme weather). 
                    Registration fees will not be refunded in such cases.`,
        },
        {
          title: "Photography and Media",
          content: `By participating, you consent to the use of your name and image for event-related promotions. 
                    Photos and videos from the event are the property of the organizers.`,
        },
        {
          title: "Code of Conduct",
          content: `Respect fellow participants, volunteers, and staff. 
                    Any misconduct or unsportsmanlike behavior will result in disqualification.`,
        },
        {
          title: "Acknowledgment of Risks",
          content: `By registering, you accept the risks involved in participating and waive any claims against the organizers.`,
        },
        {
          title: "Agreement",
          content: `By registering for the Vagarai Green Marathon, you confirm that you have read and agreed to these Terms and Conditions.`,
        },
      ];
      

  return (
<>

<Box sx={{ maxWidth: "800px", margin: "10px auto", padding: "20px" }}>
  <Typography
    variant="h3"
    gutterBottom
    sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}
  >
    Terms and Conditions
  </Typography>
  {terms.map((term, index) => (
    <Accordion
      key={index}
      sx={{
        borderRadius: "8px",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "10px",
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{
          backgroundColor: "rgba(40, 167, 69, 0.2)", // Light green background
          borderRadius: "8px",
          "&:hover": { backgroundColor: "rgba(40, 167, 69, 0.2)" }, // Slightly darker green on hover
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#28a745", // Green text color
            letterSpacing:"0.5px"
          }}
        >
          {term.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#f1f9f3", // Light green background for details
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            color: "#555", // Dark gray text color for content
            lineHeight: "1.6",
          }}
        >
          {term.content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ))}
</Box>

</>
  );
};

export default TermsAndConditions;
