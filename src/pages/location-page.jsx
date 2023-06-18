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
import OffCanvasMenu from "../components/offCanvasMenu";

const LocationPage = () => {
  const navigate = useNavigate();
  const locationUrl = useLocation();
  const { pathname } = locationUrl;

  const [locations, setLocations] = useState(locationData);
  const [location, setLocation] = useState(null);

  const [navActive, setNavActive] = useState(false);

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
          style={{
            height: navActive ? "100vh " : "fit-content",
            overflow: navActive ? "hidden" : "show",
          }}
        >
          <Navbar setNavActive={setNavActive} />
          <OffCanvasMenu navActive={navActive} setNavActive={setNavActive} />
          <div className="location-page-wrapper">
            <div className="container">
              <h1>About {location.title}</h1>
              <p>{location.longDescription}</p>
              <LocationAction />
              <div className="slide">
                <div className="container side-attractions ">
                  {location.sideAttractions.map((attraction) => {
                    return (
                      <SideAttractionCard key={uuidv4()} data={attraction} />
                    );
                  })}
                </div>
              </div>
              <ArrowButton text={"Go back"} />
            </div>

            <div className="container side-attractions hide">
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
