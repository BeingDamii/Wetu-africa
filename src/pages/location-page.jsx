import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowButton from "../components/arrow-button";
import LocationAction from "../components/location-action";
import LocationCard from "../components/location-card";
import Navbar from "../components/navbar";
import locationData from "../resources/locationData";
import StyledLocationPage from "../styledcomponents/location-page.styled";
import { pageTransition } from "../resources/variants";

import { v4 as uuidv4 } from "uuid";
import SideAttractionCard from "../components/side-attraction-card";

const LocationPage = () => {
  const navigate = useNavigate();
  const locationUrl = useLocation();
  const { pathname } = locationUrl;

  const [locations, setLocations] = useState(locationData);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const currentLocationData = locations.filter(
      (locationState) => locationState.url === pathname
    );
    setLocation(...currentLocationData);
  }, [pathname, locations]);
  return (
    <>
      {location && (
        <StyledLocationPage
          variants={pageTransition}
          initial="initial"
          animate="animate"
        >
          <Navbar />
          <div className="location-page-wrapper">
            <div className="container">
              <h1>About {location.title}</h1>
              <p>{location.longDescription}</p>
              <LocationAction />
              <ArrowButton text={"Go back"} />
            </div>
            <div className="container side-attractions ">
              {location.sideAttractions.map((attraction) => {
                return <SideAttractionCard key={uuidv4()} data={attraction} />;
              })}
            </div>
          </div>
        </StyledLocationPage>
      )}
    </>
  );
};

export default LocationPage;
