import React, { useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addSearch } from "../redux/placeSlice";

const SearchBar = ({ onPlaceSelect }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        if (place?.geometry?.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          const name = place.name || "";
          const address = place.formatted_address || "";

          dispatch(
            addSearch({
              name,
              address,
              lat,
              lng,
            })
          );
          onPlaceSelect({ name, address, lat, lng });
        }
      });
    }
  }, [dispatch, onPlaceSelect]);

  return (
    <TextField
      inputRef={inputRef}
      label="Search Place"
      fullWidth
      variant="outlined"
    />
  );
};

export default SearchBar;
