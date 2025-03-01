import React, { useEffect, useRef } from "react";

const MapView = ({ place }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (place && window.google) {
      const center = { lat: place.lat, lng: place.lng };
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
      });

      new window.google.maps.Marker({ position: center, map });
    }
  }, [place]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapView;
