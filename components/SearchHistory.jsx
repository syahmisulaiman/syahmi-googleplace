import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, Button, Typography, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; 
import { saveFavorite, clearHistory } from "../redux/placeSlice";

const SearchHistory = () => {
  const searches = useSelector((state) => state.places.searches);
  const dispatch = useDispatch();

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "black" }}>
          Search History
        </Typography>
        <IconButton onClick={() => dispatch(clearHistory())} color="error">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Box>
      <List>
        {searches.map((place, index) => (
          <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ color: "black" }}>{place.name}</Typography>
            <Button
              onClick={() => dispatch(saveFavorite(place))}
              variant="contained"
              sx={{
                backgroundColor: "#007bff",
                "&:hover": { backgroundColor: "#0056b3" },
                borderRadius: "20px",
                padding: "8px 16px",
              }}
            >
              Save as Favorite
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SearchHistory;
