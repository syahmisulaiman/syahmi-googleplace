import React, { useState } from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { LoadScript } from "@react-google-maps/api";
import SearchBar from "../components/SearchBar";
import MapView from "../components/MapView";
import SearchHistory from "../components/SearchHistory";
import googleMapsLogo from "../src/assets/icons8-google-maps-50.png"; 

// Google Maps API Libraries
const LIBRARIES = ["places", "marker"];

const HomePage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={LIBRARIES} version="beta">
      <Box
        sx={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 0",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: "#fff",
            minHeight: "90vh",
            width: "90vw",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Paper elevation={3} sx={{ padding: "1rem 2rem", borderRadius: "10px" }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <img src={googleMapsLogo} alt="Google Maps Logo" width="40" height="40" />
              <Typography variant="h4" fontWeight="bold">
                Google Places Autocomplete
              </Typography>
            </Box>
          </Paper>

          <Box width="100%" maxWidth="600px" mt={3}>
            <SearchBar onPlaceSelect={setSelectedPlace} />
          </Box>

          {selectedPlace && (
            <Box mt={4} width="100%" maxWidth="700px" height="450px" sx={{ borderRadius: "10px", overflow: "hidden" }}>
              <MapView place={selectedPlace} />
            </Box>
          )}

          <Typography variant="h5" fontWeight="bold" mt={4} mb={2}>
            Search History
          </Typography>
          <Paper elevation={2} sx={{ width: "100%", maxWidth: "600px", padding: "1rem", borderRadius: "10px" }}>
            <SearchHistory />
          </Paper>
        </Container>
      </Box>
    </LoadScript>
  );
};

export default HomePage;
