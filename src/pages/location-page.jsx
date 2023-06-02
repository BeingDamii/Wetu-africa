import { useNavigate, useLocation } from "react-router-dom";
import ArrowButton from "../components/arrow-button";
import LocationAction from "../components/location-action";
import Navbar from "../components/navbar";
import StyledLocationPage from "../styledcomponents/location-page.styled";

const LocationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  return (
    <StyledLocationPage>
      <Navbar />
      <div className="location-page-wrapper">
        <div className="container">
          <h1>About Masai Mara National Reserve,Kenya</h1>
          <p>
            Welcome to the enchanting Serengeti National Park in Tanzania, where
            nature's majesty unfolds on an epic scale. Spanning vast savannahs,
            Serengeti is a sanctuary of captivating beauty and abundant
            wildlife. As the sun-kissed grasslands stretch as far as the eye can
            see, witness the breathtaking spectacle of the annual wildebeest
            migration, where millions of wildebeest, zebras, and other
            herbivores traverse the plains in search of fresh grazing. With
            lions prowling, cheetahs sprinting, and elephants grazing, the
            Serengeti offers an unparalleled opportunity to witness nature's raw
            power and delicate balance. Immerse yourself in this timeless
            landscape, where every sunrise paints the horizon with hues of gold
            and every sunset sets the sky ablaze. Serengeti National Park
            beckons adventurers, nature enthusiasts, and dreamers alike to
            experience the sheer wonder of Africa's untamed wilderness.
          </p>
          <LocationAction />
          <ArrowButton text={"Go back"}/>
        </div>
        <div className="container"></div>
      </div>
    </StyledLocationPage>
  );
};

export default LocationPage;
